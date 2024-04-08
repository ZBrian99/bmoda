import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//hacer grid de 4 para las imagenes y videos, si es solo 1, ocupa todo el espacio, si son 2, ocupan una columna o una fila cada uno, si son 3 hacemos un grid de 3x3 y ocupan o 3 columans o 3 filas, si son 4 hacemos grid de 2x2 y uno en cada posicion, se verifica que no se repitan las posiciones.

//tambien hacer que los tamañnos de video e imagen sean personalizados para que no ocupen siempre toda la pantalla, y al mismo tiempo la animacion y no se rompa

const CardContainer = styled(motion.div)`
	position: relative;
	/* width: 100%; */
	width: calc(100vw - 17px);
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
		/* padding: 1rem; */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	z-index: 2;
`;

const Title = styled(motion.h2)`
	font-family: ${({ theme }) => theme.fonts.titulo};
	color: ${({ theme }) => theme.colors.white};

	font-size: ${({ fontSize }) => fontSize};
	grid-column: ${({ gridcolumn }) => gridcolumn} / span 2;
	grid-row: ${({ gridrow }) => gridrow};
	align-self: ${({ alignSelf }) => alignSelf};
	text-align: ${({ textAlign }) => textAlign};
	order: ${({ order }) => order};
	/* background-color: #333; */
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra */
`;

const Subtitle = styled(motion.h3)`
	font-family: ${({ theme }) => theme.fonts.aux};
	color: ${({ theme }) => theme.colors.primary};

	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra */
	font-size: ${({ fontSize }) => fontSize};
	grid-column: ${({ gridcolumn }) => gridcolumn} / span 2;
	grid-row: ${({ gridrow }) => gridrow};
	align-self: ${({ alignSelf }) => alignSelf};
	text-align: ${({ textAlign }) => textAlign};
	order: ${({ order }) => order};
	/* background-color: #333; */
`;

const Description = styled(motion.p)`
	font-family: ${({ theme }) => theme.fonts.desc};
	color: ${({ theme }) => theme.colors.light};

	font-size: ${({ fontSize }) => fontSize};
	grid-column: ${({ gridcolumn }) => gridcolumn} / span 2;
	grid-row: ${({ gridrow }) => gridrow};
	order: 5;
	align-self: ${({ alignSelf }) => alignSelf};
	text-align: ${({ textAlign }) => textAlign};
	order: ${({ order }) => order};
	/* background-color: #333; */
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra */
`;

const Date = styled(motion.p)`
	font-family: ${({ theme }) => theme.fonts.aux};
	color: ${({ theme }) => theme.colors.light};

	font-size: ${({ fontSize }) => fontSize};
	grid-column: ${({ gridcolumn }) => gridcolumn};
	grid-row: ${({ gridrow }) => gridrow};
	align-self: ${({ alignSelf }) => alignSelf};
	text-align: ${({ textAlign }) => textAlign};
	order: ${({ order }) => order};
	/* background-color: #333; */
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra */
`;

const Link = styled(motion.a)`
	font-family: ${({ theme }) => theme.fonts.aux};
	color: ${({ theme }) => theme.colors.primary};

	font-size: ${({ fontSize }) => fontSize};
	grid-column: ${({ gridcolumn }) => gridcolumn};
	grid-row: ${({ gridrow }) => gridrow};
	text-decoration: none;
	align-self: ${({ alignSelf }) => alignSelf};
	text-align: ${({ textAlign }) => textAlign};
	order: ${({ order }) => order};
	/* background-color: #333; */
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra */
`;
const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000000;
	z-index: 1;
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
	filter: brightness(0.5);
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
	filter: brightness(0.5);
`;

const getRandomFontSize = (level) => {
	// Define los rangos de tamaños de fuente para cada nivel de importancia en vw
	const fontSizeRanges = {
		1: { min: 3.5, max: 4.5 },
		2: { min: 2, max: 3.2 },
		3: { min: 1.2, max: 1.8 },
		4: { min: 1, max: 1.2 },
		5: { min: 0.8, max: 1 },
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

const generateRandomOrderFlexAndTextAlign = (totalElements) => {
	const orderArray = [];
	const orderIndexes = [];
	const flexAlignOptions = ['flex-start', 'center', 'flex-end'];
	const textAlignOptions = ['left', 'center'];

	for (let i = 1; i <= totalElements; i++) {
		let orderIndex;
		do {
			orderIndex = Math.floor(Math.random() * totalElements) + 1;
		} while (orderIndexes.includes(orderIndex));
		orderIndexes.push(orderIndex);

		orderArray.push({
			order: orderIndex,
			alignSelf: flexAlignOptions[Math.floor(Math.random() * flexAlignOptions.length)],
			textAlign: textAlignOptions[Math.floor(Math.random() * textAlignOptions.length)],
		});
	}

	return orderArray;
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
	// const scaleRanges = {
	// 	1: { min: 1.1, max: 1.3 },
	// 	2: { min: 1.4, max: 1.6 },
	// 	3: { min: 1.7, max: 1.9 },
	// 	4: { min: 2.0, max: 2.2 },
	// 	5: { min: 2.3, max: 2.5 },
	// };
	// const scaleRanges = {
	// 	1: { min: 0.5, max: 0.7 },
	// 	2: { min: 0.8, max: 1.0 },
	// 	3: { min: 1.0, max: 1.2 },
	// 	4: { min: 1.3, max: 1.5 },
	// 	5: { min: 1.6, max: 1.8 },
	// };
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

const getRandomPosition = (minPercent = 1, maxPercent = 100) => {
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
	// Generar un número aleatorio entre 0 y 1
	const randomChance = Math.random();

	// Si el número aleatorio es menor que 0.5, devuelve scale 1 y posición 0
	if (randomChance < 0.5) {
		return { scale: 1, x: '0%', y: '0%' };
	}

	// Generar una escala aleatoria entre 1.1 y 2
	const randomScale = Math.random() * (2 - 1.1) + 1.1;

	// Calcular el porcentaje máximo basado en la escala
	const maxPercent = (randomScale - 1) * 100;

	// Generar un número aleatorio entre 0 y el porcentaje máximo para x e y
	const randomPercentX = (Math.random() * maxPercent) / 2;
	const randomPercentY = (Math.random() * maxPercent) / 2;

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

const totalElements = 5;
const totalRows = 3;
const totalColumns = 3;

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
	const randomOrderAndAlign = generateRandomOrderFlexAndTextAlign(totalElements);
	const { backgroundColor } = getRandomColor();
	const randomPositions = generateRandomPositions(totalElements, totalRows, totalColumns);
	const randomScale = getRandomScale();

	const { scale, x, y } = getRandomScaleAndPosition();

	return (
		<CardContainer initial='hidden' whileInView='show' exit='hidden' viewport={{ amount: 0.5, once: true }}>
			{video ? (
				<Video
					src={video}
					width={size}
					height={size}
					autoPlay
					loop
					muted
					variants={{
						hidden: {
							// opacity: 0.3,
							scale,
							x,
							y,
							// clipPath: getRandomPolygonPair('circle').hidden,
							// transition: {
							// 	type: 'ease',
							// 	ease: 'easeInOut',
							// 	duration: getRandomDuration(1.5),
							// },
						},
						show: {
							// opacity: 1,
							...getRandomScaleAndPosition(),
							// clipPath: getRandomPolygonPair('circle').show,
							// transition: {
							// 	type: 'ease',
							// 	ease: 'easeInOut',
							// 	duration: getRandomDuration(1.5),
							// },
						},
					}}
					transition={{
						type: 'ease',
						ease: 'easeInOut',
						duration: getRandomDuration(1.5),
					}}
				/>
			) : videos && videos[0] ? (
				<Video
					src={videos[0]}
					width={size}
					height={size}
					autoPlay
					loop
					muted
					variants={{
						hidden: {
							// opacity: 0.3,
							scale,
							x,
							y,
							// clipPath: getRandomPolygonPair('circle').hidden,
							// transition: {
							// 	type: 'ease',
							// 	ease: 'easeInOut',
							// 	duration: getRandomDuration(1.5),
							// },
						},
						show: {
							// opacity: 1,
							...getRandomScaleAndPosition(),
							// clipPath: getRandomPolygonPair('circle').show,
							// transition: {
							// 	type: 'ease',
							// 	ease: 'easeInOut',
							// 	duration: getRandomDuration(1.5),
							// },
						},
					}}
					transition={{
						type: 'ease',
						ease: 'easeInOut',
						duration: getRandomDuration(1.5),
					}}
				/>
			) : image ? (
				<Image
					src={image}
					width={size}
					height={size}
					variants={{
						hidden: {
							// opacity: 0.3,
							scale,
							x,
							y,
							// clipPath: getRandomPolygonPair('circle').hidden,
							// transition: {
							// 	type: 'ease',
							// 	ease: 'easeInOut',
							// 	duration: getRandomDuration(1.5),
							// },
						},
						show: {
							// opacity: 1,
							...getRandomScaleAndPosition(),
							// clipPath: getRandomPolygonPair('circle').show,
						},
					}}
					transition={{
						type: 'ease',
						ease: 'easeInOut',
						duration: getRandomDuration(1.5),
					}}
				/>
			) : images && images[0] ? (
				<Image
					src={images[0]}
					width={size}
					height={size}
					variants={{
						hidden: {
							// opacity: 0.3,
							scale,
							x,
							y,
							// clipPath: getRandomPolygonPair('circle').hidden,
							// transition: {
							// 	type: 'ease',
							// 	ease: 'easeInOut',
							// 	duration: getRandomDuration(1.5),
							// },
						},
						show: {
							// opacity: 1,
							...getRandomScaleAndPosition(),
							// clipPath: getRandomPolygonPair('circle').show,
						},
					}}
					transition={{
						type: 'ease',
						ease: 'easeInOut',
						duration: getRandomDuration(1.5),
					}}
				/>
			) : (
				<div>Error</div>
			)}

			<Info
				// initial={{ opacity: 0, x: 100 }}
				// whileInView={{ opacity: 1, x: 0 }}
				// viewport={{ amount: 0.3 }}
				// transition={{duration:getRandomDuration(), type: 'spring', stiffness: 100, damping: 30 }}

				variants={{
					hidden: {
						// clipPath: getRandomPolygonPair('circle').hidden,
						transition: {
							// type: 'ease',
							// ease: 'easeInOut',
							// duration: getRandomDuration(),
							delayChildren: 0.5,
							staggerChildren: 0.5,
						},
					},
					show: {
						// clipPath: getRandomPolygonPair('circle').show,
						transition: {
							// type: 'ease',
							// ease: 'easeInOut',
							// duration: getRandomDuration(),
							delayChildren: 0.5,
							staggerChildren: 0.5,
						},
					},
				}}
				transition={{
					// type: 'ease',
					// ease: 'easeInOut',
					// duration: getRandomDuration(),
					delayChildren: 0.5,
					staggerChildren: 0.5,
				}}
			>
				{index && (
					// {title && (
					<Title
						fontSize={getRandomFontSize(1)}
						gridcolumn={randomPositions[0].column}
						gridrow={randomPositions[0].row}
						alignSelf={randomOrderAndAlign[0].alignSelf}
						order={randomOrderAndAlign[0].order}
						textAlign={randomOrderAndAlign[0].textAlign}
						variants={generateRandomAnimation()}
						transition={{
							type: 'ease',
							ease: 'easeInOut',
							duration: getRandomDuration(),
						}}
						// transition={{ duration: 0.5 }}
						// initial={{ opacity: 0, x: '-100%' }}
						// whileInView={{ opacity: 1, x: '0%' }}
						// viewport={{ amount: 0.3 }}
						// transition={{ duration: getRandomDuration(), type: 'spring', stiffness: 100, damping: 30 }}
					>
						{` ${index} ${title ? title : ''}`}
					</Title>
				)}
				{subtitle && (
					<Subtitle
						fontSize={getRandomFontSize(2)}
						gridcolumn={randomPositions[1].column}
						gridrow={randomPositions[1].row}
						alignSelf={randomOrderAndAlign[1].alignSelf}
						order={randomOrderAndAlign[1].order}
						textAlign={randomOrderAndAlign[1].textAlign}
						variants={generateRandomAnimation()}
						transition={{
							type: 'ease',
							ease: 'easeInOut',
							duration: getRandomDuration(),
						}}
						// transition={{ duration: 0.5 }}
						// initial={{ opacity: 0, y: -100 }}
						// whileInView={{ opacity: 1, y: 0 }}
						// viewport={{ amount: 0.3 }}
						// transition={{ duration: getRandomDuration(), type: 'spring', stiffness: 100, damping: 30 }}
					>
						{subtitle}
					</Subtitle>
				)}
				{description && (
					<Description
						fontSize={getRandomFontSize(3)}
						gridcolumn={randomPositions[2].column}
						gridrow={randomPositions[2].row}
						alignSelf={randomOrderAndAlign[2].alignSelf}
						order={randomOrderAndAlign[2].order}
						textAlign={randomOrderAndAlign[2].textAlign}
						variants={generateRandomAnimation()}
						transition={{
							type: 'ease',
							ease: 'easeInOut',
							duration: getRandomDuration(),
						}}
						// tra}sition={{ duration: 0.5 }}
						// initial={{ opacity: 0, x: 100 }}
						// whileInView={{ opacity: 1, x: 0 }}
						// viewport={{ amount: 0.3 }}
						// transition={{ duration: getRandomDuration(), type: 'spring', stiffness: 100, damping: 30 }}
					>
						{description}
					</Description>
				)}
				{date && (
					<Date
						fontSize={getRandomFontSize(4)}
						gridcolumn={randomPositions[3].column}
						gridrow={randomPositions[3].row}
						alignSelf={randomOrderAndAlign[3].alignSelf}
						order={randomOrderAndAlign[3].order}
						textAlign={randomOrderAndAlign[3].textAlign}
						variants={generateRandomAnimation()}
						transition={{
							type: 'ease',
							ease: 'easeInOut',
							duration: getRandomDuration(),
						}}
						// tra}sition={{ duration: 0.5 }}
						// initial={{ opacity: 0, y: 100 }}
						// whileInView={{ opacity: 1, y: 0 }}
						// viewport={{ amount: 0.3 }}
						// transition={{ duration: getRandomDuration(), type: 'spring', stiffness: 100, damping: 30 }}
					>
						{date}
					</Date>
				)}
				{link && (
					<Link
						href={link}
						fontSize={getRandomFontSize(3)}
						gridcolumn={randomPositions[4].column}
						gridrow={randomPositions[4].row}
						alignSelf={randomOrderAndAlign[4].alignSelf}
						order={randomOrderAndAlign[4].order}
						textAlign={randomOrderAndAlign[4].textAlign}
						variants={generateRandomAnimation()}
						transition={{
							type: 'ease',
							ease: 'easeInOut',
							duration: getRandomDuration(),
						}}
						// tra}sition={{ duration: 0.5 }}
						// initial={{ opacity: 0, scale: 0.5 }}
						// whileInView={{ opacity: 1, scale: 1 }}
						// viewport={{ amount: 0.3 }}
						// transition={{ duration: getRandomDuration(), type: 'spring', stiffness: 100, damping: 30 }}
					>
						{`Ver más...`}
					</Link>
				)}
			</Info>
		</CardContainer>
	);
};

export default RandomCard;
