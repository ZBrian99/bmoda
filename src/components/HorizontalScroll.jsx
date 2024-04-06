import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

import '../styles/test.scss'

export const HorizontalScroll = () => {
   const targetRef = useRef(null);

		const { scrollYProgress } = useScroll({
			target: targetRef,
		});

		const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

	return (
		<div className='container'>
			<div className='top'></div>
			<section ref={targetRef} className='HorizontalScroll'>
				<div className='HorizontalScroll-Sticky'>
					<motion.div style={{ x }} className='HorizontalScroll-Container '>
						<div className='HorizontalScroll-Item'></div>
						<div className='HorizontalScroll-Item'></div>
						<div className='HorizontalScroll-Item'></div>
						<div className='HorizontalScroll-Item'></div>
					</motion.div>
				</div>
			</section>
			<div className='bottom'></div>
		</div>
	);
};
