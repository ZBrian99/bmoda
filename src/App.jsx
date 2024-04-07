import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme.js';
import { ImageOverlay } from './components/visuals/ImageOverlay.jsx';
import { HorizontalScroll } from './components/HorizontalScroll.jsx';
import styled from 'styled-components';
import './styles/test.scss';
import RandomCard from './components/randoms/RandomCard.jsx';
import { MenuCategory } from './components/MenuCategory.jsx';
const data = [
	{
		title: 'Aventura en la naturaleza',
		subtitle: 'Exploración de un paisaje impresionante',
		description:
			'Un día soleado perfecto para una caminata por las montañas, descubriendo nuevos senderos y cascadas escondidas.',
		date: '2024-04-06',
		link: '#',
		image: 'src/assets/images/i3.jpg',
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Familia en el parque',
		description:
			'Un picnic relajante en el parque con la familia, disfrutando del sol y jugando juegos al aire libre.',
		link: '#',
		image: 'src/assets/images/i7.jpg',
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Puesta de sol en la playa',
		subtitle: 'Romanticismo frente al mar',
		date: '2024-04-07',
		image: 'src/assets/images/i4.jpg',
		loader: true,
		animation: 'scale',
	},
	{
		title: 'Senderismo en la montaña',
		subtitle: 'Descubriendo la belleza natural',
		description:
			'Una experiencia emocionante explorando los senderos de montaña, con vistas impresionantes y aire fresco.',
		date: '2024-04-08',
		link: '#',
		image: 'src/assets/images/i2.jpg',
		loader: false,
		animation: 'x',
	},
	{
		title: 'Relajación en el lago',
		description:
			'Un día tranquilo en el lago, remando en kayak y disfrutando de la serenidad del entorno natural.',
		date: '2024-04-09',
		image: 'src/assets/images/i3.jpg',
		loader: true,
		animation: 'y',
	},
	{
		title: 'Exploración urbana',
		subtitle: 'Callejeando por la ciudad',
		date: '2024-04-10',
		link: '#',
		image: 'src/assets/images/i19.jpg',
		loader: false,
		animation: 'opacity',
	},
	{
		title: 'Escapada rural',
		subtitle: 'Disfrutando del campo',
		description: 'Un fin de semana tranquilo en una casa rural, rodeado de naturaleza y aire fresco.',
		date: '2024-04-11',
		image: 'src/assets/images/i3.jpg',
		loader: true,
		animation: 'fade',
	},
	{
		title: 'Exploración en bicicleta',
		subtitle: 'Aventura sobre ruedas',
		date: '2024-04-12',
		image: 'src/assets/images/i2.jpg',
		loader: false,
		animation: 'rotate',
	},
	{
		title: 'Picnic junto al río',
		subtitle: 'Diversión bajo el sol',
		description: 'Una tarde de diversión junto al río, con comida deliciosa y juegos al aire libre.',
		date: '2024-04-13',
		link: '#',
		image: 'src/assets/images/i1.jpg',
		loader: true,
		animation: 'scale',
	},
	{
		title: 'Exploración urbana nocturna',
		description:
			'Caminando por las calles iluminadas de la ciudad de noche, disfrutando de la atmósfera urbana.',
		date: '2024-04-14',
		image: 'src/assets/images/i19.jpg',
		loader: false,
		animation: 'x',
	},
	{
		title: 'Aventura en la ciudad',
		subtitle: 'Explorando lugares nuevos',
		description:
			'Un día emocionante recorriendo las calles de la ciudad y descubriendo lugares interesantes.',
		date: '2024-04-15',
		link: '#',
		image: 'src/assets/images/i5.jpg',
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Día de playa',
		subtitle: 'Relajación bajo el sol',
		description: 'Disfrutando de la arena, el mar y el sol en un día perfecto en la playa.',
		date: '2024-04-16',
		image: 'src/assets/images/i6.jpg',
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Excursión en barco',
		subtitle: 'Navegando por aguas cristalinas',
		description: 'Una aventura en barco para explorar hermosos paisajes marinos y descubrir vida marina.',
		date: '2024-04-17',
		link: '#',
		image: 'src/assets/images/i7.jpg',
		loader: true,
		animation: 'scale',
	},
	{
		title: 'Visita a un parque temático',
		subtitle: 'Diversión y adrenalina',
		description: 'Un día lleno de emociones en un parque temático con atracciones emocionantes.',
		date: '2024-04-18',
		image: 'src/assets/images/i8.jpg',
		loader: false,
		animation: 'x',
	},
	{
		title: 'Cena romántica',
		subtitle: 'Ambiente íntimo y deliciosa comida',
		description: 'Una velada especial con una cena romántica en un restaurante elegante.',
		date: '2024-04-19',
		link: '#',
		image: 'src/assets/images/i9.jpg',
		loader: true,
		animation: 'y',
	},
	{
		title: 'Exploración en la selva',
		subtitle: 'Descubriendo la vida salvaje',
		description: 'Una aventura en la selva para explorar la diversidad de la flora y fauna.',
		date: '2024-04-20',
		link: '#',
		image: 'src/assets/images/i10.jpg',
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Viaje en globo aerostático',
		subtitle: 'Vistas panorámicas desde las alturas',
		description: 'Un emocionante viaje en globo aerostático para disfrutar de vistas impresionantes.',
		date: '2024-04-21',
		image: 'src/assets/images/i11.jpg',
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Caminata en el desierto',
		subtitle: 'Explorando paisajes áridos',
		description: 'Una caminata en el desierto para descubrir la belleza y la tranquilidad del entorno.',
		date: '2024-04-22',
		link: '#',
		image: 'src/assets/images/i12.jpg',
		loader: true,
		animation: 'scale',
	},
	{
		title: 'Visita a un castillo',
		subtitle: 'Sumergiéndose en la historia',
		description: 'Una visita a un castillo antiguo para aprender sobre su historia y arquitectura.',
		date: '2024-04-23',
		image: 'src/assets/images/i13.jpg',
		loader: false,
		animation: 'x',
	},
	{
		title: 'Excursión en kayak',
		subtitle: 'Remando en aguas cristalinas',
		description: 'Una emocionante excursión en kayak para explorar hermosos paisajes acuáticos.',
		date: '2024-04-24',
		link: '#',
		image: 'src/assets/images/i14.jpg',
		loader: true,
		animation: 'y',
	},
	{
		title: 'Visita a un jardín botánico',
		subtitle: 'Admirando la belleza de la naturaleza',
		description: 'Una visita a un jardín botánico para disfrutar de la variedad de plantas y flores.',
		date: '2024-04-25',
		image: 'src/assets/images/i15.jpg',
		loader: false,
		animation: 'fade',
	},
	{
		title: 'Recorrido en bicicleta por la ciudad',
		subtitle: 'Explorando la vida urbana',
		description: 'Un recorrido en bicicleta por la ciudad para descubrir lugares interesantes.',
		date: '2024-04-26',
		link: '#',
		image: 'src/assets/images/i16.jpg',
		loader: true,
		animation: 'rotate',
	},
	{
		title: 'Visita a un mercado local',
		subtitle: 'Descubriendo sabores y colores',
		description: 'Una visita a un mercado local para disfrutar de productos frescos y tradicionales.',
		date: '2024-04-27',
		image: 'src/assets/images/i17.jpg',
		loader: true,
		animation: 'scale',
	},
	{
		title: 'Excursión en barco por un lago',
		subtitle: 'Navegando en aguas tranquilas',
		description: 'Una excursión en barco por un lago para relajarse y disfrutar de la naturaleza.',
		date: '2024-04-28',
		link: '#',
		image: 'src/assets/images/i18.jpg',
		loader: false,
		animation: 'x',
	},
	{
		title: 'Visita a un museo de arte',
		subtitle: 'Explorando obras maestras',
		description: 'Una visita a un museo de arte para apreciar obras maestras de diferentes épocas.',
		date: '2024-04-29',
		image: 'src/assets/images/i19.jpg',
		loader: true,
		animation: 'y',
	},
];

const Container = styled.div`
	background-color: #333;
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<MenuCategory />
				<Routes>
					<Route path='/' element={<HorizontalScroll />} />
					<Route path='/boda' element={<HorizontalScroll />} />
					<Route path='/recuerdos' element={<HorizontalScroll />} />
					<Route path='/sitios' element={<HorizontalScroll />} />
					<Route path='/amigos' element={<HorizontalScroll />} />
					<Route path='/fotos' element={<HorizontalScroll />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
