import { useState, useEffect, useRef } from 'react';

const useScroll = (direction = 'vertical') => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [scrollDirection, setScrollDirection] = useState(null);
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const lastScrollPositionRef = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			let currentScrollPosition;
			if (direction === 'vertical') {
				currentScrollPosition = window.scrollY;
			} else if (direction === 'horizontal') {
				currentScrollPosition = window.scrollX;
			}

			const scrollDir = currentScrollPosition > lastScrollPositionRef.current ? 'down' : 'up';
			const windowSize = direction === 'vertical' ? window.innerHeight : window.innerWidth;
			const fullSize = direction === 'vertical' ? document.body.clientHeight : document.body.clientWidth;
			const scrollPercent = (currentScrollPosition / (fullSize - windowSize)) * 100;

			setScrollPosition(currentScrollPosition);
			setScrollDirection(scrollDir);
			setScrollPercentage(scrollPercent);

			lastScrollPositionRef.current = currentScrollPosition;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [direction]);

	return {
		scrollPosition,
		scrollDirection,
		scrollPercentage,
	};
};

export default useScroll;
