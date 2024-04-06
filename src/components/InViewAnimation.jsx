import { useState, useEffect } from 'react';

function useElementVisibility(element, axis = 'both') {
	const [visibilityPercentage, setVisibilityPercentage] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!element) return;

			const { top, bottom, left, right, height, width } = element.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const viewportWidth = window.innerWidth;

			let visibleHeight = 0;
			let visibleWidth = 0;
			let elementHeight = 0;
			let elementWidth = 0;
			let visibilityPercentage = 0;

			if (axis === 'y' && bottom > 0 && top < viewportHeight) {
				visibleHeight = Math.min(bottom, viewportHeight) - Math.max(0, top);
				elementHeight = height;
				visibilityPercentage = (visibleHeight / elementHeight) * 100;
			}

			if (axis === 'x' && right > 0 && left < viewportWidth) {
				visibleWidth = Math.min(right, viewportWidth) - Math.max(0, left);
				elementWidth = width;
				visibilityPercentage = (visibleWidth / elementWidth) * 100;
			}

			if (axis === 'both' && bottom > 0 && top < viewportHeight && right > 0 && left < viewportWidth) {
				visibleHeight = Math.min(bottom, viewportHeight) - Math.max(0, top);
				visibleWidth = Math.min(right, viewportWidth) - Math.max(0, left);
				elementHeight = viewportHeight;
				elementWidth = viewportWidth;
				visibilityPercentage = ((visibleHeight * visibleWidth) / (height * width)) * 100;
			}

			setVisibilityPercentage(Math.round(visibilityPercentage));
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Calcula la visibilidad inicial al montar el componente

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [element, axis]);

	return visibilityPercentage;
}

export default useElementVisibility;
export const InViewAnimation = () => {
	const targetElement = document.getElementById('target'); // Obtén el elemento con id 'target'
	const visibilityPercentage = useElementVisibility(targetElement, 'y'); // Usa el hook
	console.log('Visibility Percentage:', visibilityPercentage); // Imprime el porcentaje de visibilidad en la consola
	return (
		<div style={{ height: '2000px', width: '2000px' }}>
			<div
				id='target'
				style={{
					width: '100px',
					height: '100px',
					background: 'red',
				}}
			/>
		</div>
	);
};
