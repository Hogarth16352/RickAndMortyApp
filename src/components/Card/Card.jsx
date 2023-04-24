import React from 'react';
import { Link } from "react-router-dom";

import '../../styles/Card.css';

export default function Card(props) {
   return (
      <div className='cardContainer'>
         <div className='characterCard'>
         <button 
         className = 'closeButton'
         onClick={props.onClose}
         >
            X
         </button>
         <Link to={`/detail/${props.id}`} >
         <img 
              className = 'characterImage'
              src={props.image} 
              alt={props.name} 
              />
         </Link>
         
         </div>
         <div className='dataCard'>
            <h2>Name: {props.name}</h2>
            <h2>Status: {props.status}</h2>
            <h2>Specie: {props.species}</h2>
            <h2>Gender: {props.gender}</h2>
         </div>
      </div>
      )
}