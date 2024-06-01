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

const getRandomScaleAndPosition = () => {
	const randomScale = Math.random() * (1.1 - 0.8) + 0.8;

	const maxPercent = (randomScale - 1) * 100;

	const randomPercentX = Math.random() * maxPercent * 2 - maxPercent;
	const randomPercentY = Math.random() * maxPercent * 2 - maxPercent;

	const randomX = randomPercentX.toFixed(2) + '%';
	const randomY = randomPercentY.toFixed(2) + '%';

	return { scale: randomScale, x: randomX, y: randomY };
};

const getRandomDuration = (min = 0.8, max = 2.0) => {
	const randomDuration = Math.random() * (max - min) + min;

	const roundedDuration = Math.round(randomDuration * 10) / 10;

	return roundedDuration;
};

const RandomSideMulty = ({ images, videos }) => {
	const totalElements = videos?.length || images?.length;

	function assignRandomColumns(totalElements) {
		const occupiedColumns = [];
		const assignments = [];

		for (let i = 0; i < totalElements; i++) {
			let column;
			do {
				column = Math.floor(Math.random() * 3) + 1;
			} while (occupiedColumns.includes(column));

			occupiedColumns.push(column);
			assignments.push(column);
		}

		return assignments;
	}

	const columnAssignments = assignRandomColumns(totalElements);
	return (
		<CardContainer initial='hidden' whileInView='show' exit='hidden' viewport={{ amount: 0.5 }}>
			<MediaContainer>
				{videos
					? videos.map((video, index) => (
							<MediaItem
								key={index}
								initial={{ ...getRandomScaleAndPosition() }}
								whileInView={{ ...getRandomScaleAndPosition() }}
								transition={{ duration: getRandomDuration(3, 8), repeat: Infinity, repeatType: 'reverse' }}
								style={{
									gridRow: ` span ${Math.floor(Math.random() * 3) + 1}`,
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
									gridRow: ` span ${Math.floor(Math.random() * 3) + 1}`,
									gridColumn: `${columnAssignments[index]}`,
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
