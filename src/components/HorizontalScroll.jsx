import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

import '../styles/HorizontalScroll.scss';
import RandomCard from './randoms/RandomCard';
import RandomSideCard from './randoms/RandomSide';
import RandomSideMulty from './randoms/RandomSideMulty';

import { data } from '../data/data.json';
import { dataMulty } from '../data/dataMulty.json';

function shuffleArray(array) {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}
	return shuffledArray;
}
function getRandomNumber() {
	return Math.floor(Math.random() * 10) + 1;
}

export const HorizontalScroll = () => {
	const targetRef = useRef(null);

	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const windowOffset = -innerWidth + 1;

	const dataOffset = data.length - 1;

	const totalWidth = windowOffset * dataOffset;

	const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, totalWidth * 0.75]), {
		stiffness: 150,
		damping: 30,
		overshootClamping: true,
	});

	useEffect(() => {
		const handleResize = () => {
			setInnerWidth(window.innerWidth);
			console.log('reload size', window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const components = [RandomCard, RandomSideMulty, RandomSideCard];

	return (
		<div className='container'>
			<div className='vertical'>
				<RandomCard {...dataMulty[getRandomNumber()]} />
				<RandomSideCard {...dataMulty[getRandomNumber()]} />
				<RandomSideMulty {...dataMulty[getRandomNumber()]} />
				<RandomSideMulty {...dataMulty[getRandomNumber()]} />
				<RandomSideCard {...dataMulty[getRandomNumber()]} />
				<RandomCard {...dataMulty[getRandomNumber()]} />
			</div>
			{innerWidth > 960 ? (
				<section
					ref={targetRef}
					className='HorizontalScroll'
					style={{
						height: ` calc((100vw - 17px) * ${dataOffset / 2})`,
					}}
				>
					<div className='HorizontalScroll-Sticky'>
						<motion.div style={{ x }} className='HorizontalScroll-Container '>
							{shuffleArray(
								dataMulty.map((item, index) => {
									const Component = components[Math.floor(Math.random() * components.length)];
									return <Component key={index} index={index} {...item} />;
								})
							)}
						</motion.div>
					</div>
				</section>
			) : (
				<div className='vertical'>
					{shuffleArray(
						dataMulty.map((item, index) => {
							const Component = components[Math.floor(Math.random() * components.length)];
							return <Component key={index} index={index} {...item} />;
						})
					)}
				</div>
			)}

			<div className='vertical'>
				<RandomCard {...dataMulty[getRandomNumber()]} />
				<RandomSideCard {...dataMulty[getRandomNumber()]} />
				<RandomSideMulty {...dataMulty[getRandomNumber()]} />
				<RandomCard {...dataMulty[getRandomNumber()]} />
				<RandomSideMulty {...dataMulty[getRandomNumber()]} />
				<RandomSideCard {...dataMulty[getRandomNumber()]} />
			</div>
		</div>
	);
};
