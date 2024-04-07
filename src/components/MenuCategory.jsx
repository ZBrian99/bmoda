import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/MenuCategory.scss';
// Importar el archivo de estilos Sass

export const MenuCategory = () => {
	const [isActive, setIsActive] = useState(false);

	const handleToggleClick = () => {
		setIsActive(!isActive);
	};
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setIsActive(false);
	};

	return (
		<>
			<motion.button
				className={`MenuCategory-Button ${isActive && 'MenuCategory-ButtonActive'}`}
				onClick={handleToggleClick}
				whileHover={{
					scale: 1.1,
					y: -3,
				}}
				whileTap={{ scale: 0.9 }}
				transition={{ type: 'spring', stiffness: 200, duration: 0.4 }}
			>
				X
			</motion.button>

			<motion.div className={`MenuCategory ${isActive ? 'isVisible' : ''}`}>
				<motion.h2 className='MenuCategory-Title'>Categorías</motion.h2>

				<motion.div
					className='MenuCategory-Links'
					initial='hidden'
					whileInView='show'
					transition={{
						delayChildren: 0.1,
						staggerChildren: 0.1,
					}}
				>
					<motion.div
						className='MenuCategory-LinkContainer'
						variants={{
							hidden: { opacity: 0, x: 100 },
							show: { opacity: 1, x: 0 },
						}}
					>
						<Link className='MenuCategory-Link' onClick={handleClick} to='/boda'>
							Boda
						</Link>
					</motion.div>

					<motion.div
						className='MenuCategory-LinkContainer'
						variants={{
							hidden: { opacity: 0, x: 100 },
							show: { opacity: 1, x: 0 },
						}}
					>
						<Link className='MenuCategory-Link' onClick={handleClick} to='/fotos'>
							Fotos
						</Link>
					</motion.div>
					<motion.div
						className='MenuCategory-LinkContainer'
						variants={{
							hidden: { opacity: 0, x: 100 },
							show: { opacity: 1, x: 0 },
						}}
					>
						<Link className='MenuCategory-Link' onClick={handleClick} to='/recuerdos'>
							Recuerdos
						</Link>
					</motion.div>
					<motion.div
						className='MenuCategory-LinkContainer'
						variants={{
							hidden: { opacity: 0, x: 100 },
							show: { opacity: 1, x: 0 },
						}}
					>
						<Link className='MenuCategory-Link' onClick={handleClick} to='/sitios'>
							Sitios
						</Link>
					</motion.div>
					<motion.div
						className='MenuCategory-LinkContainer'
						variants={{
							hidden: { opacity: 0, x: 100 },
							show: { opacity: 1, x: 0 },
						}}
					>
						<Link className='MenuCategory-Link' onClick={handleClick} to='/amigos'>
							Amigos
						</Link>
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
};
