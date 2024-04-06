import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MenuCategory.scss"; // Importar el archivo de estilos Sass

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
			<button className='MenuCategory-Button' onClick={handleToggleClick}>
				X
			</button>
			<div className={`MenuCategory ${isActive ? 'isVisible' : ''}`}>
				<h2 className='MenuCategory-Title'>Categorias</h2>
				<Link className='MenuCategory-Link' onClick={handleClick} to='/boda'>
					Boda
				</Link>
				<Link className='MenuCategory-Link' onClick={handleClick} to='/fotos'>
					Fotos
				</Link>
				<Link className='MenuCategory-Link' onClick={handleClick} to='/recuerdos'>
					Recuerdos
				</Link>
				<Link className='MenuCategory-Link' onClick={handleClick} to='/sitios'>
					Sitios
				</Link>
				<Link className='MenuCategory-Link' onClick={handleClick} to='/amigos'>
					Amigos
				</Link>
			</div>
		</>
	);
};
