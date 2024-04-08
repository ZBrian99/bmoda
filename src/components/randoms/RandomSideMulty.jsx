import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
	position: relative;
	/* width: 100%; */
	width: calc(50vw - 8.5px);
	/* width: calc((100vw - 1px) * 0.5); */
	@media screen and (max-width: 45rem) {
		width: calc((100vw - 1px));
	}
	height: 100vh;
	overflow: hidden;
	padding: 3rem;
	/* background-color: ${({ bgColor }) => bgColor}; */
`;

const MediaContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1rem;
	width: 100%;
	height: 100%;
	gap: 1rem;
`;

const MediaItem = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 100%;
`;
const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	/* background-color: #0a0a0a; */
	/* opacity: 0.2; */
`;
const Image = styled(motion.img)`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
	top: 0;
	left: 0;
	z-index: 1;
	border: none;
	outline: none;
	filter: brightness(0.7);
	overflow: hidden;
`;

const Video = styled(motion.video)`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
	border: none;
	outline: none;
	top: 0;
	left: 0;
	z-index: 1;
	filter: brightness(0.7);
`;

// const generateRandomPositions = (totalElements, totalRows, totalColumns) => {
// 	const positions = [];
// 	const occupiedPositions = []; // Array para controlar las posiciones ocupadas

// 	// Función auxiliar para verificar si una posición está ocupada
// 	function isPositionOccupied(row, column, spanRows, spanColumns) {
// 		// Verificar si alguna parte de la posición está ocupada
// 		for (let i = row; i < row + spanRows; i++) {
// 			for (let j = column; j < column + spanColumns; j++) {
// 				if (occupiedPositions.some((pos) => pos.row === i && pos.column === j)) {
// 					return true;
// 				}
// 			}
// 		}
// 		return false;
// 	}

// 	// Generar posiciones aleatorias para todos los elementos
// 	for (let i = 0; i < totalElements; i++) {
// 		let row, column;
// 		do {
// 			row = Math.floor(Math.random() * totalRows); // Número aleatorio de fila
// 			column = Math.floor(Math.random() * totalColumns); // Número aleatorio de columna
// 		} while (isPositionOccupied(row, column, 1, 1)); // Verificar si la posición está ocupada

// 		// Marcar las posiciones como ocupadas
// 		occupiedPositions.push({ row, column });

// 		positions.push({ row, column, spanRows: 1, spanColumns: 1 });
// 	}

// 	return positions;
// };

const getRandomScale = (min = 0.7, max = 1) => {
	// const randomChance = Math.random();

	// if (randomChance < 0.5) {
	// 	return 1;
	// }
	// Generar un número aleatorio entre min y max
	const randomScale = Math.random() * (max - min) + min;

	return randomScale;
};

const getRandomPosition = (minPercent = 1, maxPercent = 10) => {
	// Generar un número aleatorio entre 0 y 1
	const randomChance = Math.random();

	// Si el número aleatorio es menor que 0.5, devuelve { x: 0, y: 0 }
	if (randomChance < 0.5) {
		return { x: '0', y: '0' };
	}

	// Generar un número aleatorio entre minPercent y maxPercent para x e y
	const randomPercentX = Math.random() * (maxPercent - minPercent) + minPercent;
	const randomPercentY = Math.random() * (maxPercent - minPercent) + minPercent;

	// Convertir el porcentaje aleatorio a string
	const randomX = randomPercentX.toFixed(2) + '%';
	const randomY = randomPercentY.toFixed(2) + '%';

	return { x: randomX, y: randomY };
};

const getRandomScaleAndPosition = () => {
	// Generar una escala aleatoria entre 1.1 y 2
	const randomScale = Math.random() * (1.1 - 0.8) + 0.8;

	// Calcular el porcentaje máximo basado en la escala
	const maxPercent = (randomScale - 1) * 100;

	// Generar un número aleatorio entre -maxPercent y maxPercent para x e y
	const randomPercentX = Math.random() * maxPercent * 2 - maxPercent;
	const randomPercentY = Math.random() * maxPercent * 2 - maxPercent;

	// Convertir los porcentajes aleatorios a strings
	const randomX = randomPercentX.toFixed(2) + '%';
	const randomY = randomPercentY.toFixed(2) + '%';

	return { scale: randomScale, x: randomX, y: randomY };
};

const getRandomDuration = (min = 0.8, max = 2.0) => {
	// Genera un valor aleatorio de duración dentro del rango específico
	const randomDuration = Math.random() * (max - min) + min;

	// Redondea el valor a un decimal
	const roundedDuration = Math.round(randomDuration * 10) / 10;

	return roundedDuration;
};

const getRandomPolygonPair = (name) => {
	// Define pares de polígonos preestablecidos con nombres
	const polygonPairs = {
		rectangle: {
			hidden: 'polygon(0 0, 0 0, 0 100%, 0 100%)', // Rectángulo oculto
			show: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Rectángulo visible
		},
		circle: {
			hidden: 'circle(0% at 50% 50%)', // Pentágono oculto
			show: 'circle(200% at 50% 50%)', // Pentágono visible
		},
		// Puedes agregar más pares de polígonos aquí según sea necesario
	};

	if (name && polygonPairs.hasOwnProperty(name)) {
		// Si se proporciona un nombre y existe en los pares predefinidos, devuelve ese par
		return polygonPairs[name];
	} else {
		// Si no se proporciona un nombre o el nombre no existe, selecciona aleatoriamente un par
		const names = Object.keys(polygonPairs);
		const randomName = names[Math.floor(Math.random() * names.length)];
		return polygonPairs[randomName];
	}
};
function chooseRandomColor() {
	const colors = ['#000000', '#FFFFFF'];
	const randomIndex = Math.floor(Math.random() * colors.length);
	const primaryColor = colors[randomIndex];
	const secondaryColor = colors[(randomIndex + 1) % 2];

	return { primary: primaryColor, secondary: secondaryColor };
}
const generateRandomAnimation = () => {
	const getRandomDuration = (min = 0.8, max = 2.0) => {
		// Genera un valor aleatorio de duración dentro del rango específico
		const randomDuration = Math.random() * (max - min) + min;

		// Redondea el valor a un decimal
		const roundedDuration = Math.round(randomDuration * 10) / 10;

		return roundedDuration;
	};

	const getRandomScale = (level) => {
		// Si no se proporciona el nivel, generamos uno aleatorio entre 1 y 5
		if (level === undefined) {
			level = Math.floor(Math.random() * 5) + 1;
		}

		// Generar un número aleatorio entre 0 y 1
		const randomChance = Math.random();

		// Si el número aleatorio es menor que 0.5, devuelve 1 (sin efecto de escala)
		if (randomChance < 0.5) {
			return 1;
		}

		// Define los rangos de escala para cada nivel de importancia
		const scaleRanges = {
			1: { min: 0, max: 0.4 },
			2: { min: 0.4, max: 0.8 },
			3: { min: 0.8, max: 1.2 },
			4: { min: 1.2, max: 1.6 },
			5: { min: 1.6, max: 2.0 },
		};

		// Obtener el rango de escala para el nivel dado
		const { min, max } = scaleRanges[level];

		// Generar un valor aleatorio de escala dentro del rango específico
		const randomScale = Math.random() * (max - min) + min;

		return randomScale;
	};

	return {
		hidden: {
			opacity: 0,
			x: Math.random() * 150 - 50,
			y: Math.random() * 150 - 50,
			scale: getRandomScale(),
			clipPath: getRandomPolygonPair('rectangle').hidden,
			// transition: {
			// 	type: 'ease',
			// 	ease: 'easeInOut',
			// 	duration: getRandomDuration(),
			// },
		},
		show: {
			opacity: 1,
			x: 0,
			y: 0,
			scale: 1,
			clipPath: getRandomPolygonPair('rectangle').show,

			// transition: {
			// 	type: 'ease',
			// 	ease: 'easeInOut',
			// 	duration: getRandomDuration(),
			// },
		},
	};
};
// const totalElements = 5;
const totalRows = 3;
const totalColumns = 3;

const RandomSideMulty = ({
	index,
	title,
	subtitle,
	description,
	date,
	link,
	image,
	images,
	size,
	video,
	videos,
	loader,
	animation,
}) => {
	// const randomOrderAndAlign = generateRandomOrderFlexAndTextAlign(totalElements);
	// const randomPositions = generateRandomPositions(totalElements, totalRows, totalColumns);
	// const randomScale = getRandomScale();
	// const { scale, x, y } = getRandomScaleAndPosition();
	const totalElements = videos?.length || images?.length;
	// const positions = generateRandomPositions(totalElements, totalRows, totalColumns);

	function assignRandomColumns(totalElements) {
		const occupiedColumns = []; // Columnas ocupadas
		const assignments = []; // Asignaciones de columnas para cada elemento

		for (let i = 0; i < totalElements; i++) {
			let column;
			do {
				column = Math.floor(Math.random() * 3) + 1; // Seleccionar aleatoriamente una columna entre 1 y 3
			} while (occupiedColumns.includes(column)); // Verificar si la columna está ocupada

			occupiedColumns.push(column); // Marcar la columna como ocupada
			assignments.push(column); // Guardar la asignación
		}

		return assignments;
	}
	function assignRandomRows(totalElements) {
		const occupiedRows = []; // Filas ocupadas
		const assignments = []; // Asignaciones de filas para cada elemento

		for (let i = 0; i < totalElements; i++) {
			let row;
			do {
				row = Math.floor(Math.random() * 3) + 1; // Seleccionar aleatoriamente una fila entre 1 y 3
			} while (occupiedRows.includes(row)); // Verificar si la fila está ocupada

			occupiedRows.push(row); // Marcar la fila como ocupada
			assignments.push(row); // Guardar la asignación
		}

		return assignments;
	}

	// Ejemplo de uso con 3 elementos
	const rowAssignments = assignRandomRows(totalElements);
	const columnAssignments = assignRandomColumns(totalElements);
	const spanAssignments = Array.from({ length: totalElements }, () => Math.floor(Math.random() * 3) + 1);
	const { primary } = { primary: '#000000' };
	return (
		<CardContainer
			initial='hidden'
			whileInView='show'
			exit='hidden'
			viewport={{ amount: 0.5 }}
			// bgColor={primary}
		>
			<MediaContainer>
				{videos
					? videos.map((video, index) => (
							<MediaItem
								key={index}
								initial={{ ...getRandomScaleAndPosition() }}
								whileInView={{ ...getRandomScaleAndPosition() }}
								transition={{ duration: getRandomDuration(3, 8), repeat: Infinity, repeatType: 'reverse' }}
								style={{
									gridRow: ` span ${Math.floor(Math.random() * 3) + 1}`, // Expandir en el eje vertical
									gridColumn: `${columnAssignments[index]}`,
									// ...randomPosition,
									// transform: `rotate(${Math.random() * 10 - 5}deg)`,
									// scale: randomScale,
								}}
							>
								<Video key={index} src={video} autoPlay loop muted />
							</MediaItem>
					  ))
					: images
					? images.map((image, index) => (
							<MediaItem
								key={index}
								initial={{ ...getRandomScaleAndPosition() }}
								whileInView={{ ...getRandomScaleAndPosition() }}
								transition={{ duration: getRandomDuration(3, 8), repeat: Infinity, repeatType: 'reverse' }}
								style={{
									gridRow: ` span ${Math.floor(Math.random() * 3) + 1}`, // Expandir en el eje vertical
									gridColumn: `${columnAssignments[index]}`,
									// ...randomPosition,
									// transform: `rotate(${Math.random() * 10 - 5}deg)`,
									// scale: randomScale,
								}}
							>
								<Image key={index} src={image} />
							</MediaItem>
					  ))
					: ''}
			</MediaContainer>
		</CardContainer>
	);
};

export default RandomSideMulty;
