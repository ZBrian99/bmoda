import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

import '../styles/test.scss';
const platos = [
	{
		id: 1,
		name: 'Pizza',
		price: 20,
		img: 'src/assets/images/pizza.jpg',
	},
	{
		id: 2,
		name: 'Hamburgesa',
		price: 15,
		img: 'src/assets/images/hamburgesa.jpg',
	},
	{
		id: 3,
		name: 'Sushi',
		price: 25,
		img: 'src/assets/images/sushi.jpg',
	},
	{
		id: 4,
		name: 'Carne',
		price: 28,
		img: 'src/assets/images/carne.jpg',
	},
	{
		id: 5,
		name: 'Ensalada',
		price: 12,
		img: 'src/assets/images/ensalada.jpg',
	},
	// {
	// 	id: 6,
	// 	name: 'Sushi',
	// 	price: 25,
	// 	img: 'src/assets/images/sushi.jpg',
	// },
	// {
	// 	id: 7,
	// 	name: 'Pizza',
	// 	price: 20,
	// 	img: 'src/assets/images/pizza.jpg',
	// },
	// {
	// 	id: 8,
	// 	name: 'Hamburgesa',
	// 	price: 15,
	// 	img: 'src/assets/images/hamburgesa.jpg',
	// },
	// {
	// 	id: 9,
	// 	name: 'Sushi',
	// 	price: 25,
	// 	img: 'src/assets/images/sushi.jpg',
	// },
	// {
	// 	id: 10,
	// 	name: 'Carne',
	// 	price: 28,
	// 	img: 'src/assets/images/carne.jpg',
	// },
	// {
	// 	id: 11,
	// 	name: 'Ensalada',
	// 	price: 12,
	// 	img: 'src/assets/images/ensalada.jpg',
	// },
	{
		id: 12,
		name: 'Sushi',
		price: 2225,
		img: 'src/assets/images/sushi.jpg',
	},
];
export const HorizontalScroll = () => {
	const targetRef = useRef(null);
	// const [transformValue, setTransformValue] = useState(0);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});
	// const windowOffset = -500 + 1;
	// const platosOffset = 12 - 1;
	const windowOffset = -innerWidth + 1;
	const platosOffset = platos.length - 1;
	const totalWidth = windowOffset * platosOffset;

	// useEffect(() => {
	// 	const handleScrol = () => {
	// 		setTransformValue(scrollYProgress.current * totalWidth);
	// 		console.log('update',);
	// 	};

	// 	window.addEventListener('scroll', handleScrol);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScrol);
	// 	};
	// }, []);
	// const spring = useSpring(transformValue, {
	// 	stiffness: 150,
	// 	damping: 30,
	// 	overshootClamping: true,
	// });

	// const scaleX = useSpring(scrollYProgress, {
	// });
	// const x = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * 3]);

	// const x = useTransform(scrollYProgress, [0, 1], [0, totalWidth]);
	////////////////////
	const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, totalWidth]), {
		stiffness: 150,
		damping: 30,
		overshootClamping: true,
	});

	/////////////////////
	// const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, windowOffset * platosOffset]), {
	// 	stiffness: 150, // Ajusta la rigidez de la primavera
	// 	damping: 30, // Ajusta la amortiguación de la primavera
	// });
	// console.log('recarga');
	// const x = useTransform(scrollYProgress, [0, 1], [0, (-window.innerWidth + 1) * (platos.length - 1)]);

	// useEffect(() => {
	// 	const handleScrol = () => {
	// 		console.log(`${x.current}px`);
	// 	};

	// 	window.addEventListener('scroll', handleScrol);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScrol);
	// 	};
	// }, []);
	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setInnerWidth(window.innerWidth);
	// 		console.log('hola');
	// 	};

	// 	window.addEventListener('resize', handleResize);
	// 	return () => {
	// 		window.removeEventListener('resize', handleResize);
	// 	};
	// }, []);

	return (
		<div className='container'>
			<div className='top'></div>
			<section
				ref={targetRef}
				className='HorizontalScroll'
				style={{
					height: ` calc((100vw - 17px) * ${platos.length - 1})`,
				}}
			>
				<div className='HorizontalScroll-Sticky'>
          <motion.div
            style={{x}}
						// style={{ transform: `translateX(${x.current}px)` }}
						// style={{ x: '-15015px' }}
						// animate={{ x: `${transformValue}px` }}
						// transition={{ duration: 0.5, type: 'spring' }}
						className='HorizontalScroll-Container '
					>
						{platos.map((plato) => (
							<Card key={plato.id} {...plato} />
						))}
					</motion.div>
				</div>
			</section>
			<div className='bottom'></div>
		</div>
	);
};

const Card = ({ id, img, name, price }) => {
	return (
		<motion.div key={id} className='HorizontalScroll-Item'>
			<img className='HorizontalScroll-ItemImage ' src={img} alt={name} />

			<div className='HorizontalScroll-ItemInfo'>
				<h3 className='HorizontalScroll-ItemTitle'>{name}</h3>
				<p className='HorizontalScroll-ItemPrice '>${price}</p>
			</div>
		</motion.div>
	);
};
