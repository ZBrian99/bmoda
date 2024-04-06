import '../styles/test.scss';
import { motion, useScroll } from 'framer-motion';

import React from "react";

const Card = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}
    >
      <h2>Card Title</h2>
      <p>Card content...</p>
    </motion.div>
  );
};

export default Card;

export const TestCardNew = () => {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div className='cards-container'>
			{[...Array(200)].map((_, index) => (
				<motion.div
					className='test-card'
					key={index}
					animate={{ rotate: 360 }}
					transition={{
						duration: 2,
						min: 0,
						max: 100,
						bounceStiffness: 100,
					}}
					// initial={{ opacity: 0, translateY: 100 }}
					// whileInView={{ opacity: 1, translateY: 0 }}
					// transition={{
					// 	duration: 1.3,
					// 	ease: [0, 0.71, 0.2, 1.01],
					// 	translateY: {
					// 		type: 'Inertia',
					// 		damping: 5,
					// 		stiffness: 100,
					// 		restDelta: 0.001,
					// 	},
					// }}
					// variants={item}
				>
					{/* Contenido de tu tarjeta */}
					<h2>Tarjeta {index + 1}</h2>
					<p>Contenido de la tarjeta {index + 1}</p>
				</motion.div>
			))}
		</motion.div>
	);
};
