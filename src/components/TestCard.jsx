import React, { useRef, useEffect, useState } from 'react';
import '../styles/test.scss';



const handleScroll = (element, axis = 'both') => {
	if (!element) return;

	const { top, bottom, left, right, height, width } = element.getBoundingClientRect();
	const viewportHeight = axis === 'y' || axis === 'both' ? window.innerHeight : 0;
	const viewportWidth = axis === 'x' || axis === 'both' ? window.innerWidth : 0;

	if (axis === 'y' && bottom > 0 && top < viewportHeight) {
		return Math.round(((Math.min(bottom, viewportHeight) - Math.max(0, top)) / height) * 100);
	}

	if (axis === 'x' && right > 0 && left < viewportWidth) {
		return Math.round(((Math.min(right, viewportWidth) - Math.max(0, left)) / width) * 100);
	}

	if (axis === 'both' && bottom > 0 && top < viewportHeight && right > 0 && left < viewportWidth) {
		return Math.round(
			(((Math.min(bottom, viewportHeight) - Math.max(0, top)) *
				(Math.min(right, viewportWidth) - Math.max(0, left))) /
				(height * width)) *
				100
		);
	}
	return 0;
};

function esPar(numero) {
	return numero % 2 === 0;
}
const getRandomColor = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
};


const cards = 200;

export const TestCard = () => {
	const cardRefs = Array.from({ length: cards }, () => useRef());
	const [visibilities, setVisibilities] = useState(Array(cards).fill(0));

	useEffect(() => {
		const newVisibilities = cardRefs.map((ref, index) => {
			return handleScroll(ref.current, 'y');
		});
		setVisibilities(newVisibilities);
	}, []);

	useEffect(() => {
		const handleScrollEvent = () => {
			const newVisibilities = cardRefs.map((ref, index) => {
				return handleScroll(ref.current, 'y');
			});
			setVisibilities(newVisibilities);
		};

		window.addEventListener('scroll', handleScrollEvent);

		return () => {
			window.removeEventListener('scroll', handleScrollEvent);
		};
	}, [cardRefs]);

	return (
		<div className='container'>
			{cardRefs.map((ref, index) => (
				<ChildCard key={index} ref={ref} text={index} visibility={visibilities[index]} />
			))}
		</div>
	);
};

const ChildCard = React.forwardRef(({ visibility, text }, ref) => {
  const [color, setColor] = useState()
  useEffect(() => {
	 setColor(getRandomColor())
  
  }, [])
  
	return (
		<div ref={ref}>
			<div
				style={{
					backgroundColor: color,
				}}
				className={`element ${visibility > 30 ? 'isVisible' : ''}`}
			>
				<span>{text}</span>
				<span>{` : ${visibility}%`}</span>
			</div>
		</div>
	);
});
