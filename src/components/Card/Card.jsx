import React from 'react';
import '../../styles/Card.css';

export default function Card({ id, name, status, species, gender, origin, image}) {
   const onClose = () => window.alert('Emulamos que se cierra la card');
   return (
      <div className='container'>
         <button 
         className = 'closeButton'
         onClick={onClose}
         >
            X
         </button>
         <img src={image} alt={name} />
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
      )
}