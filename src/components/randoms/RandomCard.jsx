import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
	position: relative;
	/* width: 100%; */
	width: calc(100vw - 1px);
	height: 100vh;
	overflow: hidden;
`;

const Info = styled(motion.div)`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	/* grid-auto-rows: minmax(100px, auto); */
	grid-template-rows: repeat(3, 1fr);
	gap: 1rem;
	width: 100%;
	height: 100%;
	padding: 3rem;
	@media screen and (max-width: 45rem) {
		padding: 1rem;
		display: flex; /* Cambia a display flex para una sola columna */
		flex-direction: column; /* Apila los elementos verticalmente */
		justify-content: space-around;
	}
	z-index: 2;
`;

const Title = styled(motion.h2)`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color }) => color};
	grid-column: ${({ gridcolumn }) => gridcolumn} / span 2;
	grid-row: ${({ gridrow }) => gridrow};
	/* align-self: flex-end;
	align-self: center;
	align-self: flex-start;
	order: 1;
	order: 2;
	order: 3;
	order: 4; 
	order: 5; */
	align-self: ${({ alignSelf }) => alignSelf};
	order: ${({ order }) => order};
	/* background-color: #333; */
`;

const Subtitle = styled(motion.h3)`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color }) => color};
	grid-column: ${({ gridcolumn }) => gridcolumn} / span 2;
	grid-row: ${({ gridrow }) => gridrow};
	align-self: ${({ alignSelf }) => alignSelf};
	/* background-color: #333; */
	order: ${({ order }) => order};
`;

const Description = styled(motion.p)`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color }) => color};
	grid-column: ${({ gridcolumn }) => gridcolumn} / span 2;
	grid-row: ${({ gridrow }) => gridrow};
	order: 5;
	align-self: ${({ alignSelf }) => alignSelf};
	/* background-color: #333; */
	order: ${({ order }) => order};
`;

const Date = styled(motion.p)`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color }) => color};
	grid-column: ${({ gridcolumn }) => gridcolumn};
	grid-row: ${({ gridrow }) => gridrow};
	align-self: ${({ alignSelf }) => alignSelf};
	order: ${({ order }) => order};
`;

const Link = styled(motion.a)`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color }) => color};
	grid-column: ${({ gridcolumn }) => gridcolumn};
	grid-row: ${({ gridrow }) => gridrow};
	text-decoration: none;
	align-self: ${({ alignSelf }) => alignSelf};
	order: ${({ order }) => order};
`;
const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ color }) => color};
	z-index: 1;
`;
const Image = styled.img`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	top: 0;
	left: 0;
	z-index: 1;
	filter: brightness(0.5);
`;

const Video = styled.video`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	top: 0;
	left: 0;
	z-index: 1;
	filter: brightness(0.5);
`;

const getRandomFontSize = (level) => {
	// Define los rangos de tamaños de fuente para cada nivel de importancia en vw
	const fontSizeRanges = {
		1: { min: 3.5, max: 5 },
		2: { min: 2.5, max: 4 },
		3: { min: 1, max: 2 },
		4: { min: 1.5, max: 2.5 },
		5: { min: 1, max: 1.5 },
	};

	// Establecer el valor mínimo y máximo fijo en vw
	const minVw = 1; // 1vw (mínimo fijo)
	const maxVw = 8; // 8vw (máximo fijo)

	// Obtener el rango de tamaño de fuente para el nivel dado
	const { min: minSize, max: maxSize } = fontSizeRanges[level];

	// Generar un valor aleatorio en vw dentro del rango específico
	const randomVw = Math.random() * (maxVw - minVw) + minVw;

	// Calcular el factor de crecimiento o el valor central en vw
	const fontSizeVw = -1.5 * minSize + randomVw;

	// Devolver el tamaño de fuente utilizando la función clamp
	// return `clamp(${minSize}rem, ${fontSizeVw}vw, ${maxSize}rem)`;
	return `clamp(${minSize}rem, -1.5rem + 8vw, ${maxSize}rem)`;
};

const getRandomColor = () => {
	// Genera valores RGB aleatorios
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	// Calcular la luminancia del color de fondo
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	// Seleccionar un color de texto blanco o negro en función de la luminancia
	const textColor = luminance > 0.5 ? '#000000' : '#ffffff';

	// Devolver el color de texto
	return { backgroundColor: `rgb(${r}, ${g}, ${b})`, textColor };
};
// const generateRandomPositions = (totalElements, totalRows, totalColumns) => {
// 	const positions = [];
// 	const totalGridCells = totalRows * totalColumns;

// 	// Verifica que el número de elementos no sea mayor que el número total de celdas en el grid
// 	if (totalElements > totalGridCells) {
// 		throw new Error('El número de elementos es mayor que el número total de celdas en el grid');
// 	}

// 	// Genera posiciones aleatorias únicas para cada elemento
// 	for (let i = 0; i < totalElements; i++) {
// 		let position;
// 		do {
// 			// Genera una posición aleatoria dentro del grid
// 			const row = Math.floor(Math.random() * totalRows) + 1;
// 			const column = Math.floor(Math.random() * totalColumns) + 1;
// 			position = { row, column };
// 		} while (positions.some((pos) => pos.row === position.row && pos.column === position.column));

// 		// Agrega la posición única al array de posiciones
// 		positions.push(position);
// 	}

// 	return positions;
// };

// const generateRandomPositions = (totalElements, totalRows, totalColumns) => {
// 	const positions = [];
// 	const totalGridCells = totalRows * totalColumns;

// 	// Verifica que el número de elementos no sea mayor que el número total de celdas en el grid
// 	if (totalElements > totalGridCells) {
// 		throw new Error('El número de elementos es mayor que el número total de celdas en el grid');
// 	}

// 	// Lista de filas ocupadas
// 	const occupiedRows = new Set();

// 	// Genera posiciones aleatorias únicas para cada elemento
// 	for (let i = 0; i < totalElements; i++) {
// 		let position;
// 		do {
// 			// Genera una posición aleatoria dentro del grid
// 			let row, column;

// 			// Si es uno de los primeros tres elementos
// 			if (i < 3) {
// 				// Asigna una fila aleatoria
// 				if (i === 0) {
// 					row = Math.floor(Math.random() * totalRows) + 1;
// 				} else if (i === 1) {
// 					do {
// 						row = Math.floor(Math.random() * totalRows) + 1;
// 					} while (row === positions[0].row);
// 				} else {
// 					const remainingRows = Array.from({ length: totalRows }, (_, index) => index + 1).filter(
// 						(r) => !occupiedRows.has(r) && r !== positions[0].row && r !== positions[1].row
// 					);
// 					row = remainingRows[Math.floor(Math.random() * remainingRows.length)];
// 				}

// 				// Asigna la columna 1 o 2 alternativamente
// 				column = i % 2 === 0 ? 1 : 2;

// 				// Marca la fila como ocupada
// 				occupiedRows.add(row);

// 				// Si la columna es 1, marca también la siguiente columna como ocupada
// 			if (column === 1) {
// 				occupiedRows.add(row);
// 				occupiedRows.add(row + 1 > totalRows ? 1 : row + 1); // Se marca la siguiente fila como ocupada
// 			}
// 			} else {
// 				// Si no es uno de los primeros tres elementos, puede estar en cualquier columna
// 				let availableRows = Array.from({ length: totalRows }, (_, index) => index + 1);

// 				if (i === 3) {
// 					// Para el elemento 3, se excluyen las filas ocupadas por los elementos 1 y 2
// 					availableRows = availableRows.filter(
// 						(r) => !occupiedRows.has(r) && r !== positions[0].row && r !== positions[1].row
// 					);
// 				} else {
// 					// Para los elementos restantes, se excluyen las filas ocupadas
// 					availableRows = availableRows.filter((r) => !occupiedRows.has(r));
// 				}

// 				// Si no hay filas disponibles, se reinicia la búsqueda
// 				if (availableRows.length === 0) {
// 					continue;
// 				}

// 				row = availableRows[Math.floor(Math.random() * availableRows.length)];
// 				column = Math.floor(Math.random() * totalColumns) + 1;

// 				// Si la columna es 2, marca también la siguiente columna como ocupada
// 			if (column === 2) {
// 				const nextRow = row === totalRows ? 1 : row + 1; // Se ajusta a la primera fila si se alcanza el límite
// 				occupiedRows.add(nextRow);
// 			}
// 			}

// 			position = { row, column };
// 		} while (
// 			// Verifica si la posición está ocupada
// 			positions.some((pos) => pos.row === position.row && pos.column === position.column)
// 		);

// 		// Agrega la posición única al array de posiciones
// 		positions.push(position);
// 	}

// 	return positions;
// };

function generateRandomPositions(totalElements, totalRows, totalColumns) {
	const positions = [];
	const occupiedPositions = []; // Array para controlar las posiciones ocupadas

	// Función auxiliar para verificar si una posición está ocupada
	function isPositionOccupied(row, column) {
		return occupiedPositions.some((pos) => pos.row === row && pos.column === column);
	}

	// Generar posiciones aleatorias para los primeros tres elementos
	for (let i = 0; i < 3; i++) {
		let row, column;
		let tries = 0; // Intentos para evitar bucle infinito

		do {
			row = Math.floor(Math.random() * totalRows); // Permitir todas las filas
			column = Math.floor(Math.random() * 2) + 1; // Columna entre 1 y 2

			// Verificar si la posición está ocupada o si la siguiente columna también está ocupada
			if (isPositionOccupied(row, column) || isPositionOccupied(row, column + 1)) {
				tries++;
				if (tries > 100) {
					// Evitar bucle infinito
					console.error('No se pudo generar la posición después de 100 intentos');
					break;
				}
			} else {
				// Marcar las posiciones como ocupadas
				occupiedPositions.push({ row, column });
				occupiedPositions.push({ row, column: column + 1 });

				positions.push({ row, column });
				break; // Salir del bucle una vez se encuentre una posición válida
			}
		} while (true); // Repetir hasta encontrar una posición válida
	}

	// Generar posiciones aleatorias para los restantes elementos
	for (let i = 3; i < totalElements; i++) {
		let row, column;
		do {
			row = Math.floor(Math.random() * totalRows); // Número aleatorio de fila
			column = Math.floor(Math.random() * totalColumns); // Número aleatorio de columna
		} while (isPositionOccupied(row, column)); // Verificar si la posición está ocupada

		// Marcar la posición como ocupada
		occupiedPositions.push({ row, column });

		positions.push({ row, column });
	}

	return positions;
}

const generateRandomOrderAndAlign = (totalElements) => {
	const alignOptions = ['flex-start', 'center', 'flex-end'];
	const orderArray = [];
	const orderIndexes = [];

	for (let i = 1; i <= totalElements; i++) {
		let orderIndex;
		do {
			orderIndex = Math.floor(Math.random() * totalElements) + 1;
		} while (orderIndexes.includes(orderIndex));
		orderIndexes.push(orderIndex);

		orderArray.push({
			order: orderIndex,
			alignSelf: alignOptions[Math.floor(Math.random() * alignOptions.length)],
		});
	}

	return orderArray;
};
const totalElements = 5; // Número total de elementos
const totalRows = 3; // Número total de filas en el grid
const totalColumns = 3; // Número total de columnas en el grid

const RandomCard = ({
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
	const { backgroundColor, textColor } = image
		? { backgroundColor: '#333333', textColor: '#ffffff' }
		: getRandomColor();

	const animations = {
		// opacity: Math.random(),
		// scale: Math.random(),
		// rotate: Math.random() * 360,
		// x: Math.random() * 20 - 10, // Random horizontal shift between -10 and 10 pixels
		// y: Math.random() * 20 - 10, // Random vertical shift between -10 and 10 pixels
	};
	const randomOrderAndAlign = generateRandomOrderAndAlign(totalElements);

	const randomPositions = generateRandomPositions(totalElements, totalRows, totalColumns);

	return (
		<CardContainer>
			{video ? (
				<Video
					src={video}
					width={size}
					height={size}
					autoPlay 
					loop 
					muted
				/>
			) : image ? (
				<Image src={image} width={size} height={size} />
			) : (
				<Background color={backgroundColor} />
			)}
			{/* {image ? <Image src={image} width={size} height={size} /> : <Background color={backgroundColor} />} */}
			{/* {image ? <Image src={image} width={size} height={size} /> : <Background color={backgroundColor} />} */}
			{/* {images && images.map((img, index) => <Image key={index} src={img} width={size} height={size} />)} */}
			{/* {video && <Video src={video} width={size} height={size} />} */}
			{/* {videos && videos.map((vid, index) => <Video key={index} src={vid} width={size} height={size} />)} */}
			<Info
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ amount: 0.5 }}
				transition={{ type: 'spring', stiffness: 100, damping: 30 }}
			>
				{title && (
					<Title
						fontSize={getRandomFontSize(1)}
						color={textColor}
						gridcolumn={randomPositions[0].column}
						gridrow={randomPositions[0].row}
						alignSelf={randomOrderAndAlign[0].alignSelf}
						order={randomOrderAndAlign[0].order}
						initial={{ opacity: 0, x: '-100%' }}
						whileInView={{ opacity: 1, x: '0%' }}
						viewport={{ amount: 0.5 }}
						transition={{ type: 'spring', stiffness: 100, damping: 30 }}
					>
						{title}
					</Title>
				)}
				{subtitle && (
					<Subtitle
						fontSize={getRandomFontSize(2)}
						color={textColor}
						gridcolumn={randomPositions[1].column}
						gridrow={randomPositions[1].row}
						alignSelf={randomOrderAndAlign[1].alignSelf}
						order={randomOrderAndAlign[1].order}
						initial={{ opacity: 0, y: -100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ type: 'spring', stiffness: 100, damping: 30 }}
					>
						{subtitle}
					</Subtitle>
				)}
				{description && (
					<Description
						fontSize={getRandomFontSize(3)}
						color={textColor}
						gridcolumn={randomPositions[2].column}
						gridrow={randomPositions[2].row}
						alignSelf={randomOrderAndAlign[2].alignSelf}
						order={randomOrderAndAlign[2].order}
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ type: 'spring', stiffness: 100, damping: 30 }}
					>
						{description}
					</Description>
				)}
				{date && (
					<Date
						fontSize={getRandomFontSize(5)}
						color={textColor}
						gridcolumn={randomPositions[3].column}
						gridrow={randomPositions[3].row}
						alignSelf={randomOrderAndAlign[3].alignSelf}
						order={randomOrderAndAlign[3].order}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ type: 'spring', stiffness: 100, damping: 30 }}
					>
						{date}
					</Date>
				)}
				{link && (
					<Link
						href={link}
						fontSize={getRandomFontSize(4)}
						color={textColor}
						gridcolumn={randomPositions[4].column}
						gridrow={randomPositions[4].row}
						alignSelf={randomOrderAndAlign[4].alignSelf}
						order={randomOrderAndAlign[4].order}
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ amount: 0.5 }}
						transition={{ type: 'spring', stiffness: 100, damping: 30 }}
					>
						Link
					</Link>
				)}
			</Info>
		</CardContainer>
	);
};

export default RandomCard;
