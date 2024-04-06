import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

import '../styles/test.scss';

const platos = [
	{
		id: 1,
		name: 'Pizza',
		price: 20,
		img: 'src/assets/images/i0.jpg',
	},
	{
		id: 2,
		name: 'Hamburgesa',
		price: 15,
		img: 'src/assets/images/i1.jpg',
	},
	{
		id: 3,
		name: 'Sushi',
		price: 25,
		img: 'src/assets/images/i2.jpg',
	},
	{
		id: 4,
		name: 'Carne',
		price: 28,
		img: 'src/assets/images/i3.jpg',
	},
	{
		id: 5,
		name: 'Ensalada',
		price: 12,
		img: 'src/assets/images/i4.jpg',
	},
	{
		id: 6,
		name: 'Sushi',
		price: 25,
		img: 'src/assets/images/i2.jpg',
	},
	{
		id: 7,
		name: 'Pizza',
		price: 20,
		img: 'src/assets/images/i0.jpg',
	},
	{
		id: 8,
		name: 'Hamburgesa',
		price: 15,
		img: 'src/assets/images/i1.jpg',
	},
	{
		id: 9,
		name: 'Sushi',
		price: 25,
		img: 'src/assets/images/i2.jpg',
	},
	{
		id: 10,
		name: 'Carne',
		price: 28,
		img: 'src/assets/images/i3.jpg',
	},
	{
		id: 11,
		name: 'Ensalada',
		price: 12,
		img: 'src/assets/images/i4.jpg',
	},
	{
		id: 12,
		name: 'Sushi',
		price: 2225,
		img: 'src/assets/images/i2.jpg',
	},
];

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
	const platosOffset = platos.length - 1;

	//multiplicacion del ancho de la ventana por la cantidad de elementos o vistas a mostrar
	const totalWidth = windowOffset * platosOffset;

	//ejemplo sin efecto de resorte
	// const x = useTransform(scrollYProgress, [0, 1], [0, totalWidth]);

  //ejemplo con efecto de resorte
  //propiedad offset de useTransform posible solucione a todos los problemas
	const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, totalWidth]), {
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

  return (
    //contenedor generico con componente generico para rellenar espacio
		<div className='container'>
			{/* <div className='top'></div> */}
			{/* <div className='top'></div> */}
      {/* <div className='top'></div> */}
      {/* empieza aqui */}
			<section
				ref={targetRef}
        className='HorizontalScroll'
        //importante el estilo para que el contenedor se ajuste al tamaño de los elementos, se puede modificar o buscar otra solucion para obtener el mismo resultado o uno diferente
				style={{
					height: ` calc((100vw - 17px) * ${platos.length - 1})`,
				}}
      >
        {/* contenedor sticky padre del contenedor que se va a mover */}
				<div className='HorizontalScroll-Sticky'>
          {/* Contenedor que se va a mover, todos los hijos seran quienes se vayan mostrando y style x representa un transform translateX(x) x va de 0 a -100% en este cado para un movimiento hacia da derecha */}
					<motion.div style={{ x }} className='HorizontalScroll-Container '>
            {/* mapeo de elementos */}
            {platos.map((plato) => (
              <Card key={plato.id} {...plato} />
            ))}
					</motion.div>
				</div>
			</section>
			{/* <div className='bottom'></div> */}
			{/* <div className='bottom'></div> */}
			{/* <div className='bottom'></div> */}
		</div>
	);
};

// card generica a modo de prueba
const Card = ({ id, img, name, price }) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const loadImage = () => {
			const image = new Image();
			image.src = img;
			image.onload = () => setImageLoaded(true);
		};

		loadImage();
	}, [img]);

	return (
		<motion.div key={id} className='HorizontalScroll-Item'>
			{/* {imageLoaded ? ( */}
			<img className='HorizontalScroll-ItemImage' src={img} alt={name} />

			{/* // ) : ( */}
			{/* // 	<div>Loading...</div> */}
			{/* // )} */}

			<div className='HorizontalScroll-ItemInfo'>
				<h3 className='HorizontalScroll-ItemTitle'>{name}</h3>
				<p className='HorizontalScroll-ItemPrice'>${price}</p>
			</div>
		</motion.div>
	);
};
