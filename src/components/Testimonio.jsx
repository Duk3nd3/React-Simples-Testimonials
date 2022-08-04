import React from 'react';
import '../stylesheets/Testimonio.css';
import DB from '../data/db.json';

function Testimonio() {
	return (
		<>
			{DB &&
				DB.info.map((db) => {
					return (
						<div className='contenedor-testimonio' key={db.id}>
							<img className='imagen-testimonio' src={db.img} alt={db.name} />
							<div className='contenedor-texto-testimonio'>
								<p className='nombre-testimonio'>
									<strong>{db.name}</strong> en {db.country}
								</p>
								<p className='cargo-testimonio'>
									{db.position} en <strong>{db.company}</strong>
								</p>
								<p className='texto-testimonio'>{db.testimonial}</p>
							</div>
						</div>
					);
				})}
		</>
	);
}

export default Testimonio;
