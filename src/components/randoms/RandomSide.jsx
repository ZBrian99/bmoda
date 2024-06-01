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
`;

const Info = styled(motion.div)`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 1rem;
	width: 100%;
	height: 100%;
	padding: 3rem;
	/* @media screen and (max-width: 45rem) {
		padding: 1rem;
	} */
	z-index: 2;
	color: ${({ color }) => color};
`;

const Title = styled(motion.h2)`
	font-family: ${({ theme }) => theme.fonts.titulo};
	/* color: ${({ theme }) => theme.colors.white}; */

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
	/* color: ${({ theme }) => theme.colors.light}; */

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
	/* color: ${({ theme }) => theme.colors.light}; */

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
	z-index: 1;
	background-color: #0a0a0a;
	/* background-color: ${({ bgColor }) => bgColor};  */
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

const getRandomFontSize = (level) => {
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

	const { min: minSize, max: maxSize } = fontSizeRanges[level];

	const randomVw = Math.random() * (maxVw - minVw) + minVw;

	return `clamp(${minSize}rem, -1.5rem + 8vw, ${maxSize}rem)`;
};

function generateRandomPositions(totalElements, totalRows, totalColumns) {
	const positions = [];
	const occupiedPositions = [];

	function isPositionOccupied(row, column) {
		return occupiedPositions.some((pos) => pos.row === row && pos.column === column);
	}

	for (let i = 0; i < 3; i++) {
		let row, column;
		let tries = 0;

		do {
			row = Math.floor(Math.random() * totalRows);
			column = Math.floor(Math.random() * 2) + 1;

			if (isPositionOccupied(row, column) || isPositionOccupied(row, column + 1)) {
				tries++;
				if (tries > 100) {
					console.error('No se pudo generar la posición después de 100 intentos');
					break;
				}
			} else {
				occupiedPositions.push({ row, column });
				occupiedPositions.push({ row, column: column + 1 });

				positions.push({ row, column });
				break;
			}
		} while (true);
	}

	for (let i = 3; i < totalElements; i++) {
		let row, column;
		do {
			row = Math.floor(Math.random() * totalRows);
			column = Math.floor(Math.random() * totalColumns);
		} while (isPositionOccupied(row, column));

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
	if (level === undefined) {
		level = Math.floor(Math.random() * 5) + 1;
	}

	const randomChance = Math.random();

	if (randomChance < 0.5) {
		return 1;
	}
	const scaleRanges = {
		1: { min: 0, max: 0.4 },
		2: { min: 0.4, max: 0.8 },
		3: { min: 0.8, max: 1.2 },
		4: { min: 1.2, max: 1.6 },
		5: { min: 1.6, max: 2.0 },
	};

	const { min, max } = scaleRanges[level];

	const randomScale = Math.random() * (max - min) + min;

	return randomScale;
};

const getRandomScaleAndPosition = () => {
	const randomChance = Math.random();

	if (randomChance < 0.5) {
		return { scale: 1, x: '0%', y: '0%' };
	}

	const randomScale = Math.random() * (2 - 1.1) + 1.1;

	const maxPercent = (randomScale - 1) * 100;

	const randomPercentX = (Math.random() * maxPercent) / 2;
	const randomPercentY = (Math.random() * maxPercent) / 2;

	const randomX = randomPercentX.toFixed(2) + '%';
	const randomY = randomPercentY.toFixed(2) + '%';

	return { scale: randomScale, x: randomX, y: randomY };
};

const getRandomDuration = (min = 0.8, max = 2.0) => {
	const randomDuration = Math.random() * (max - min) + min;

	const roundedDuration = Math.round(randomDuration * 10) / 10;

	return roundedDuration;
};

const getRandomPolygonPair = (name) => {
	const polygonPairs = {
		rectangle: {
			hidden: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
			show: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		},
		circle: {
			hidden: 'circle(0% at 50% 50%)',
			show: 'circle(200% at 50% 50%)',
		},
	};

	if (name && polygonPairs.hasOwnProperty(name)) {
		return polygonPairs[name];
	} else {
		const names = Object.keys(polygonPairs);
		const randomName = names[Math.floor(Math.random() * names.length)];
		return polygonPairs[randomName];
	}
};

const generateRandomAnimation = () => {
	const getRandomScale = (level) => {
		if (level === undefined) {
			level = Math.floor(Math.random() * 5) + 1;
		}

		const randomChance = Math.random();

		if (randomChance < 0.5) {
			return 1;
		}

		const scaleRanges = {
			1: { min: 0, max: 0.4 },
			2: { min: 0.4, max: 0.8 },
			3: { min: 0.8, max: 1.2 },
			4: { min: 1.2, max: 1.6 },
			5: { min: 1.6, max: 2.0 },
		};

		const { min, max } = scaleRanges[level];

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
		},
		show: {
			opacity: 1,
			x: 0,
			y: 0,
			scale: 1,
			clipPath: getRandomPolygonPair('rectangle').show,
		},
	};
};
const totalElements = 5;
const totalRows = 3;
const totalColumns = 3;

const RandomSideCard = ({ index, title, subtitle, description, date, link }) => {
	const randomOrderAndAlign = generateRandomOrderFlexAndTextAlign(totalElements);
	const randomPositions = generateRandomPositions(totalElements, totalRows, totalColumns);

	return (
		<CardContainer initial='hidden' whileInView='show' exit='hidden' viewport={{ amount: 0.5, once: true }}>
			<Background />
			<Info
				color={'#ffffff'}
				variants={{
					hidden: {
						transition: {
							staggerChildren: 0.3,
						},
					},
					show: {
						transition: {
							staggerChildren: 0.3,
						},
					},
				}}
				transition={{
					staggerChildren: 0.3,
				}}
			>
				{index ? (
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
					>
						{` ${index} ${title ? title : ''}`}
					</Title>
				) : subtitle ? (
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
					>
						{subtitle}
					</Subtitle>
				) : (
					''
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
					>
						{`Ver más...`}
					</Link>
				)}
			</Info>
		</CardContainer>
	);
};

export default RandomSideCard;
