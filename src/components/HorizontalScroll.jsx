import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

import '../styles/test.scss';
import RandomCard from './randoms/RandomCard';
import RandomSideCard from './randoms/RandomSide';
import RandomSideMulty from './randoms/RandomSideMulty';

const data = [
	{
		title: 'Recuerdos de nuestra boda',
		subtitle: 'Compartiendo momentos inolvidables',
		description:
			'Un día lleno de amor y felicidad mientras celebramos el inicio de nuestra vida juntos. Cada sonrisa, cada abrazo y cada lágrima de alegría quedará grabada en nuestros corazones para siempre.',
		date: '2024-04-06',
		link: '#',
		image: 'src/assets/boda/boda_0.webp',
		video: 'src/assets/videos/video_0.mp4',
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Unión familiar en nuestra boda',
		description:
			'Un día de unión y felicidad junto a nuestros seres queridos, compartiendo risas y creando recuerdos que perdurarán por generaciones.',
		link: '#',
		image: 'src/assets/boda/boda_1.webp',
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Romanticismo en nuestra boda',
		subtitle: 'Celebrando nuestro amor frente a la naturaleza',
		date: '2024-04-07',
		image: 'src/assets/boda/boda_2.webp',
		loader: true,
		animation: 'scale',
	},
	{
		subtitle: 'Descubriendo la belleza del amor',
		description:
			'Cada momento está lleno de emoción mientras damos el primer paso hacia nuestro futuro juntos. Nuestros corazones están llenos de esperanza y nuestras almas rebosan de amor.',
		date: '2024-04-08',
		link: '#',
		image: 'src/assets/boda/boda_3.webp',
		video: 'src/assets/videos/video_1.mp4',
		loader: false,
		animation: 'x',
	},
	{
		description:
			'Un día de pura alegría mientras celebramos el amor que nos une. Cada risa y cada mirada reflejan la felicidad que compartimos en este día especial.',
		date: '2024-04-09',
		image: 'src/assets/boda/boda_4.webp',
		loader: true,
		animation: 'y',
	},
	{
		title: 'Amor en nuestra boda',
		subtitle: 'Explorando juntos el camino del amor',
		date: '2024-04-10',
		link: '#',
		image: 'src/assets/boda/boda_5.webp',
		video: 'src/assets/videos/video_2.mp4',
		loader: false,
		animation: 'opacity',
	},
	{
		title: 'Complicidad en nuestra boda',
		subtitle: 'Disfrutando de cada momento juntos',
		description:
			'Cada instante está lleno de complicidad mientras nos adentramos en esta nueva etapa de nuestras vidas.',
		date: '2024-04-11',
		image: 'src/assets/boda/boda_6.webp',
		loader: true,
		animation: 'fade',
	},
	{
		title: 'Aventura en nuestra boda',
		subtitle: 'Explorando el mundo del amor',
		date: '2024-04-12',
		image: 'src/assets/boda/boda_7.webp',
		loader: false,
		animation: 'rotate',
	},
	{
		title: 'Felicidad en nuestra boda',
		subtitle: 'Disfrutando del comienzo de nuestra historia',
		description: 'Cada momento está lleno de felicidad mientras celebramos el amor que nos une.',
		date: '2024-04-13',
		link: '#',
		image: 'src/assets/boda/boda_8.webp',
		video: 'src/assets/videos/video_3.mp4',
		loader: true,
		animation: 'scale',
	},
	{
		title: 'Celebración en nuestra boda',
		date: '2024-04-14',
		image: 'src/assets/boda/boda_9.webp',
		loader: false,
		animation: 'x',
	},
	{
		title: 'Compromiso en nuestra boda',
		subtitle: 'Construyendo un futuro juntos',
		date: '2024-04-15',
		link: '#',
		image: 'src/assets/boda/boda_10.webp',
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Promesas de amor en nuestra boda',
		subtitle: 'Comprometiéndonos a caminar juntos',
		date: '2024-04-21',
		image: 'src/assets/boda/boda_16.webp',
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Pasión en nuestra boda',
		subtitle: 'Celebrando el amor con intensidad',
		description:
			'Cada mirada y cada gesto está lleno de pasión mientras celebramos nuestra unión en este día tan especial.',
		date: '2024-04-16',
		image: 'src/assets/boda/boda_11.webp',
		video: 'src/assets/videos/video_4.mp4',
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Amistad en nuestra boda',
		subtitle: 'Compartiendo este día con amigos cercanos',
		description:
			'La amistad se une al amor en este día especial, mientras celebramos rodeados de amigos cercanos.',
		date: '2024-04-17',
		link: '#',
		image: 'src/assets/boda/boda_12.webp',
		video: 'src/assets/videos/video_5.mp4',
		loader: true,
		animation: 'scale',
	},
	{
		title: 'Complicidad en nuestra boda',
		subtitle: 'Compartiendo risas y secretos',
		description:
			'Cada momento está lleno de complicidad mientras nos adentramos en esta nueva etapa de nuestras vidas.',
		date: '2024-04-18',
		image: 'src/assets/boda/boda_13.webp',
		loader: false,
		animation: 'x',
	},
	{
		title: 'Amor eterno en nuestra boda',
		subtitle: 'Celebrando la unión para siempre',
		description: 'En este día especial, prometemos amarnos y cuidarnos el uno al otro por toda la eternidad.',
		date: '2024-04-19',
		link: '#',
		image: 'src/assets/boda/boda_14.webp',
		video: 'src/assets/videos/video_6.mp4',
		loader: true,
		animation: 'y',
	},
	{
		title: 'Complicidad en nuestra boda',
		subtitle: 'Disfrutando de cada momento juntos',
		description:
			'Cada instante está lleno de complicidad mientras nos adentramos en esta nueva etapa de nuestras vidas.',
		date: '2024-04-20',
		link: '#',
		image: 'src/assets/boda/boda_15.webp',
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Promesas de amor en nuestra boda',
		subtitle: 'Comprometiéndonos a caminar juntos',
		date: '2024-04-21',
		image: 'src/assets/boda/boda_16.webp',
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Celebración en nuestra boda',
		subtitle: 'Disfrutando de cada momento juntos',
		date: '2024-04-22',
		link: '#',
		image: 'src/assets/boda/boda_17.webp',
		video: 'src/assets/videos/video_7.mp4',
		loader: true,
		animation: 'scale',
	},
	{
		subtitle: 'Disfrutando de cada momento juntos',
		description:
			'Cada instante está lleno de complicidad mientras nos adentramos en esta nueva etapa de nuestras vidas.',
		date: '2024-04-23',
		image: 'src/assets/boda/boda_18.webp',
		video: 'src/assets/videos/video_8.mp4',
		loader: false,
		animation: 'x',
	},
	{
		title: 'Juntos para siempre en nuestra boda',
		description:
			'En este día especial, celebramos nuestro amor y nuestra unión, prometiendo estar juntos para siempre.',
		date: '2024-04-24',
		link: '#',
		image: 'src/assets/boda/boda_19.webp',
		video: 'src/assets/videos/video_9.mp4',
		loader: true,
		animation: 'y',
	},
];
const dataMulty = [
	{
		title: 'Recuerdos de nuestra boda',
		subtitle: 'Compartiendo momentos inolvidables',
		description:
			'Un día lleno de amor y felicidad mientras celebramos el inicio de nuestra vida juntos. Cada sonrisa, cada abrazo y cada lágrima de alegría quedará grabada en nuestros corazones para siempre.',
		date: '2024-04-06',
		link: '#',
		images: ['src/assets/boda/boda_0.webp', 'src/assets/boda/boda_0.webp', 'src/assets/boda/boda_0.webp'],
		videos: [
			'src/assets/videos/video_0.mp4',
			'src/assets/videos/video_5.mp4',
			'src/assets/videos/video_6.mp4',
		],
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Unión familiar en nuestra boda',
		description:
			'Un día de unión y felicidad junto a nuestros seres queridos, compartiendo risas y creando recuerdos que perdurarán por generaciones.',
		link: '#',
		images: ['src/assets/boda/boda_5.webp', 'src/assets/boda/boda_1.webp', 'src/assets/boda/boda_7.webp'],
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Romanticismo en nuestra boda',
		subtitle: 'Celebrando nuestro amor frente a la naturaleza',
		date: '2024-04-07',
		images: ['src/assets/boda/boda_13.webp', 'src/assets/boda/boda_15.webp', 'src/assets/boda/boda_4.webp'],
		loader: true,
		animation: 'scale',
	},
	{
		subtitle: 'Descubriendo la belleza del amor',
		description:
			'Cada momento está lleno de emoción mientras damos el primer paso hacia nuestro futuro juntos. Nuestros corazones están llenos de esperanza y nuestras almas rebosan de amor.',
		date: '2024-04-08',
		link: '#',
		images: ['src/assets/boda/boda_3.webp', 'src/assets/boda/boda_3.webp', 'src/assets/boda/boda_0.webp'],
		videos: [
			'src/assets/videos/video_9.mp4',
			'src/assets/videos/video_8.mp4',
			'src/assets/videos/video_7.mp4',
		],
		loader: false,
		animation: 'x',
	},
	{
		description:
			'Un día de pura alegría mientras celebramos el amor que nos une. Cada risa y cada mirada reflejan la felicidad que compartimos en este día especial.',
		date: '2024-04-09',
		images: ['src/assets/boda/boda_4.webp', 'src/assets/boda/boda_5.webp', 'src/assets/boda/boda_8.webp'],
		loader: true,
		animation: 'y',
	},
	{
		title: 'Recuerdos de nuestra boda',
		subtitle: 'Compartiendo momentos inolvidables',
		description:
			'Un día lleno de amor y felicidad mientras celebramos el inicio de nuestra vida juntos. Cada sonrisa, cada abrazo y cada lágrima de alegría quedará grabada en nuestros corazones para siempre.',
		date: '2024-04-06',
		link: '#',
		images: ['src/assets/boda/boda_2.webp', 'src/assets/boda/boda_9.webp', 'src/assets/boda/boda_0.webp'],
		videos: [
			'src/assets/videos/video_3.mp4',
			'src/assets/videos/video_9.mp4',
			'src/assets/videos/video_1.mp4',
		],
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Unión familiar en nuestra boda',
		description:
			'Un día de unión y felicidad junto a nuestros seres queridos, compartiendo risas y creando recuerdos que perdurarán por generaciones.',
		link: '#',
		images: ['src/assets/boda/boda_7.webp', 'src/assets/boda/boda_3.webp', 'src/assets/boda/boda_0.webp'],
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Romanticismo en nuestra boda',
		subtitle: 'Celebrando nuestro amor frente a la naturaleza',
		date: '2024-04-07',
		images: ['src/assets/boda/boda_2.webp', 'src/assets/boda/boda_5.webp', 'src/assets/boda/boda_6.webp'],
		loader: true,
		animation: 'scale',
	},
	{
		subtitle: 'Descubriendo la belleza del amor',
		description:
			'Cada momento está lleno de emoción mientras damos el primer paso hacia nuestro futuro juntos. Nuestros corazones están llenos de esperanza y nuestras almas rebosan de amor.',
		date: '2024-04-08',
		link: '#',
		images: [
			'src/assets/boda/boda_3.webp',
			'src/assets/boda/boda_3.webp',
			'src/assets/boda/boda_0.webp',
			'src/assets/boda/boda_0.webp',
		],
		videos: [
			'src/assets/videos/video_0.mp4',
			'src/assets/videos/video_5.mp4',
			'src/assets/videos/video_1.mp4',
		],
		loader: false,
		animation: 'x',
	},
	{
		description:
			'Un día de pura alegría mientras celebramos el amor que nos une. Cada risa y cada mirada reflejan la felicidad que compartimos en este día especial.',
		date: '2024-04-09',
		images: ['src/assets/boda/boda_4.webp', 'src/assets/boda/boda_8.webp', 'src/assets/boda/boda_5.webp'],
		loader: true,
		animation: 'y',
	},
	{
		title: 'Recuerdos de nuestra boda',
		subtitle: 'Compartiendo momentos inolvidables',
		description:
			'Un día lleno de amor y felicidad mientras celebramos el inicio de nuestra vida juntos. Cada sonrisa, cada abrazo y cada lágrima de alegría quedará grabada en nuestros corazones para siempre.',
		date: '2024-04-06',
		link: '#',
		images: ['src/assets/boda/boda_0.webp', 'src/assets/boda/boda_0.webp', 'src/assets/boda/boda_0.webp'],
		videos: [
			'src/assets/videos/video_0.mp4',
			'src/assets/videos/video_1.mp4',
			'src/assets/videos/video_2.mp4',
		],
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Unión familiar en nuestra boda',
		description:
			'Un día de unión y felicidad junto a nuestros seres queridos, compartiendo risas y creando recuerdos que perdurarán por generaciones.',
		link: '#',
		images: ['src/assets/boda/boda_1.webp', 'src/assets/boda/boda_6.webp', 'src/assets/boda/boda_7.webp'],
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Unión familiar en nuestra boda',
		description:
			'Un día de unión y felicidad junto a nuestros seres queridos, compartiendo risas y creando recuerdos que perdurarán por generaciones.',
		link: '#',
		images: ['src/assets/boda/boda_1.webp', 'src/assets/boda/boda_6.webp', 'src/assets/boda/boda_7.webp'],
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Unión familiar en nuestra boda',
		description:
			'Un día de unión y felicidad junto a nuestros seres queridos, compartiendo risas y creando recuerdos que perdurarán por generaciones.',
		link: '#',
		images: ['src/assets/boda/boda_1.webp', 'src/assets/boda/boda_6.webp', 'src/assets/boda/boda_7.webp'],
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Unión familiar en nuestra boda',
		description:
			'Un día de unión y felicidad junto a nuestros seres queridos, compartiendo risas y creando recuerdos que perdurarán por generaciones.',
		link: '#',
		images: ['src/assets/boda/boda_1.webp', 'src/assets/boda/boda_6.webp', 'src/assets/boda/boda_7.webp'],
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Romanticismo en nuestra boda',
		subtitle: 'Celebrando nuestro amor frente a la naturaleza',
		date: '2024-04-07',
		images: ['src/assets/boda/boda_1.webp', 'src/assets/boda/boda_2.webp', 'src/assets/boda/boda_6.webp'],
		loader: true,
		animation: 'scale',
	},
	{
		subtitle: 'Descubriendo la belleza del amor',
		description:
			'Cada momento está lleno de emoción mientras damos el primer paso hacia nuestro futuro juntos. Nuestros corazones están llenos de esperanza y nuestras almas rebosan de amor.',
		date: '2024-04-08',
		link: '#',
		images: [
			'src/assets/boda/boda_3.webp',
			'src/assets/boda/boda_3.webp',
			'src/assets/boda/boda_0.webp',
			'src/assets/boda/boda_0.webp',
		],
		videos: [
			'src/assets/videos/video_5.mp4',
			'src/assets/videos/video_0.mp4',
			'src/assets/videos/video_1.mp4',
		],
		loader: false,
		animation: 'x',
	},
	{
		title: 'Unión familiar en nuestra boda',
		description:
			'Un día de unión y felicidad junto a nuestros seres queridos, compartiendo risas y creando recuerdos que perdurarán por generaciones.',
		link: '#',
		images: ['src/assets/boda/boda_1.webp', 'src/assets/boda/boda_6.webp', 'src/assets/boda/boda_7.webp'],
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Romanticismo en nuestra boda',
		subtitle: 'Celebrando nuestro amor frente a la naturaleza',
		date: '2024-04-07',
		images: ['src/assets/boda/boda_1.webp', 'src/assets/boda/boda_2.webp', 'src/assets/boda/boda_6.webp'],
		loader: true,
		animation: 'scale',
	},
	{
		subtitle: 'Descubriendo la belleza del amor',
		description:
			'Cada momento está lleno de emoción mientras damos el primer paso hacia nuestro futuro juntos. Nuestros corazones están llenos de esperanza y nuestras almas rebosan de amor.',
		date: '2024-04-08',
		link: '#',
		images: [
			'src/assets/boda/boda_3.webp',
			'src/assets/boda/boda_3.webp',
			'src/assets/boda/boda_0.webp',
			'src/assets/boda/boda_0.webp',
		],
		videos: [
			'src/assets/videos/video_5.mp4',
			'src/assets/videos/video_0.mp4',
			'src/assets/videos/video_1.mp4',
		],
		loader: false,
		animation: 'x',
	},
	{
		description:
			'Un día de pura alegría mientras celebramos el amor que nos une. Cada risa y cada mirada reflejan la felicidad que compartimos en este día especial.',
		date: '2024-04-09',
		images: ['src/assets/boda/boda_6.webp', 'src/assets/boda/boda_8.webp', 'src/assets/boda/boda_4.webp'],
		loader: true,
		animation: 'y',
	},
];
// Función para desordenar aleatoriamente un array
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
//importante si se usan imagenes o elementos pesados como hijos dentro del scroll puede generar problemas de rendimiento, se puede buscar una solucion para cargar las imagenes de manera mas eficiente o optimizar de alguna manera, lo idea es imagenes muy livianas y contenido simple para un mejor rendimiento
export const HorizontalScroll = () => {
	//referencia al contenedor del scroll quien sera el que se mueva
	const targetRef = useRef(null);

	//estado para guardar el ancho de la ventana, puede no ser necesario si se prefiere recargar la pagina al hacer un cambio de tamaño de ventana
	//se puede buscar otra tecnica para obtener el ancho de la ventana
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	//useScroll de framer motion, se puede usar el personal, debe poder dar el porcentaje de scroll en base a un elemento particular
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	//calular el ancho de la ventana para el transform -x el + uno es para que no sobren ni falten px al cargar multiples elementos, importante el negativo - define el lado hacia donde se va a mover, si se quita hay que rotar todo pero deberia funcionar similar
	const windowOffset = -innerWidth + 1;

	//calcular el ancho total del scroll por cantidad de elementos que simunan una vista entera, se puede modificar
	const dataOffset = data.length - 1;
	// const dataOffset = data.length - 1;

	//multiplicacion del ancho de la ventana por la cantidad de elementos o vistas a mostrar
	const totalWidth = windowOffset * dataOffset;

	// const cardWidth = 1;
	// const sideCardWidth = 0.5;
	// const dataOffset = (cardWidth + sideCardWidth) * (data.length - 1);

	// Cálculo del ancho total de la sección de scroll
	// const totalWidth = windowOffset * dataOffset;

	//ejemplo sin efecto de resorte
	// const x = useTransform(scrollYProgress, [0, 1], [0, totalWidth]);

	//ejemplo con efecto de resorte
	//propiedad offset de useTransform posible solucione a todos los problemas
	const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, totalWidth * 0.75]), {
		// const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, totalWidth]), {
		//los siguientes valores se pueden modificar para obtener un efecto diferente de scroll
		stiffness: 150,
		damping: 30,
		overshootClamping: true,
	});

	//este use effect se encarga de que el scroll se actualice cuando se redimensiona la pantalla, ya que innerwidth no se actualiza solo
	useEffect(() => {
		const handleResize = () => {
			setInnerWidth(window.innerWidth);
			console.log('reload size');
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Array que contiene instancias de los tres tipos de componentes
	const components = [RandomCard, RandomSideMulty, RandomSideCard];

	return (
		//contenedor generico con componente generico para rellenar espacio
		<div className='container'>
			<div className='vertical'>
				<RandomCard {...dataMulty[getRandomNumber()]} />
				<RandomSideCard {...dataMulty[getRandomNumber()]} />
				<RandomSideMulty {...dataMulty[getRandomNumber()]} />
				<RandomSideMulty {...dataMulty[getRandomNumber()]} />
				<RandomSideCard {...dataMulty[getRandomNumber()]} />
				<RandomCard {...dataMulty[getRandomNumber()]} />
			</div>
			{/* empieza aqui */}
			<section
				ref={targetRef}
				className='HorizontalScroll'
				//importante el estilo para que el contenedor se ajuste al tamaño de los elementos, se puede modificar o buscar otra solucion para obtener el mismo resultado o uno diferente
				style={{
					height: ` calc((100vw - 17px) * ${dataOffset/2})`,
					// height: ` calc((100vw - 17px) * ${data.length - 1})`,
				}}
			>
				{/* contenedor sticky padre del contenedor que se va a mover */}
				<div className='HorizontalScroll-Sticky'>
					{/* Contenedor que se va a mover, todos los hijos seran quienes se vayan mostrando y style x representa un transform translateX(x) x va de 0 a -100% en este cado para un movimiento hacia da derecha */}
					<motion.div style={{ x }} className='HorizontalScroll-Container '>
						{/* mapeo de elementos */}
						{/* {shuffleArray(dataMulty).map((item, index) => (
							<RandomCard key={index} index={index} {...item} />
						))} */}
						{shuffleArray(
							dataMulty.map((item, index) => {
								const Component = components[Math.floor(Math.random() * components.length)];
								return <Component key={index} index={index} {...item} />;
							})
						)}
						{/* {shuffleArray(
							dataMulty.map((item, index) =>
								index % 2 === 0 ? (
									<RandomSideMulty key={index} index={index} {...item} />
								) : (
									<RandomSideCard key={index} index={index} {...item} />
								)
							)
						)}
						{shuffleArray(
							dataMulty.map((item, index) =>
								index % 2 === 0 ? (
									<RandomSideMulty key={index} index={index} {...item} />
								) : (
									<RandomSideCard key={index} index={index} {...item} />
								)
							)
						)} */}
					</motion.div>
				</div>
			</section>
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
