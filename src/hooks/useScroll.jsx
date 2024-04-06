// import { useState, useEffect, useRef } from 'react';

// const useScroll = (direction = 'vertical') => {
// 	const [scrollPosition, setScrollPosition] = useState(0);
// 	const [scrollDirection, setScrollDirection] = useState(null);
// 	const [scrollPercentage, setScrollPercentage] = useState(0);

// 	const lastScrollPositionRef = useRef(0);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			let currentScrollPosition;
// 			if (direction === 'vertical') {
// 				currentScrollPosition = window.scrollY;
// 			} else if (direction === 'horizontal') {
// 				currentScrollPosition = window.scrollX;
// 			}

// 			const scrollDir = currentScrollPosition > lastScrollPositionRef.current ? 'down' : 'up';
// 			const windowSize = direction === 'vertical' ? window.innerHeight : window.innerWidth;
// 			const fullSize = direction === 'vertical' ? document.body.clientHeight : document.body.clientWidth;
// 			const scrollPercent = (currentScrollPosition / (fullSize - windowSize)) * 100;

// 			setScrollPosition(currentScrollPosition);
// 			setScrollDirection(scrollDir);
// 			setScrollPercentage(scrollPercent);

// 			lastScrollPositionRef.current = currentScrollPosition;
// 		};

// 		window.addEventListener('scroll', handleScroll);

// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 		};
// 	}, [direction]);

// 	return {
// 		scrollPosition,
// 		scrollDirection,
// 		scrollPercentage,
// 	};
// };

// export default useScroll;



import { useRef, useState, useEffect } from 'react';

const useScroll = (ref) => {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	useEffect(() => {
		const scrollHandler = () => {
			if (!ref.current) return; // Verificar si la referencia es null

			const { scrollTop, scrollHeight, clientHeight } = ref.current;
			const scrollableHeight = scrollHeight - clientHeight;
			const percentage = scrollTop / scrollableHeight;
			setScrollPercentage(percentage);
		};

		if (ref.current) {
			ref.current.addEventListener('scroll', scrollHandler);
		}

		return () => {
			if (ref.current) {
				ref.current.removeEventListener('scroll', scrollHandler);
			}
		};
	}, [ref]);

	return scrollPercentage;
};

export default useScroll;