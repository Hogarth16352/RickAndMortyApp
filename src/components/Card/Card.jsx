import React from 'react';
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

import '../../styles/Card.css';

export function Card( { id, name, species, status, origin, gender, image, onClose, addFavorites, deleteFavorites, myFavorites } ) {//id, name, species, gender, image, onClose, addFavorites, deleteFavorites

   const [ isFav , setIsFav ] = useState( false );

   const handleFavorite = () => {
      if( isFav ){
      setIsFav(false);
      deleteFavorites(id)
      }else{
      setIsFav(true);
        addFavorites( {
          id, 
          name, 
          species, 
          status, 
          origin, 
          gender, 
          image, 
          addFavorites, 
          deleteFavorites 
          } 
        )
      }
    }
    
    useEffect( () => {
       if (myFavorites) {
     myFavorites.forEach((fav) => {
       if (fav.id === id) {
         setIsFav(true);
       }
     });
   }
    }, [myFavorites]);
    
   return (
      <div className='cardContainer'>
         <div className='characterCard'>
         { isFav ? ( <button className = 'isfavButton' onClick={handleFavorite}><AiFillHeart size={25} color = "red" /></button> ) : 
                  ( <button className = 'nofavButton' onClick={handleFavorite}><AiOutlineHeart size={25} color="black"/></button> )
          }

          {onClose && (
            <button 
               className = 'closeButton'
               onClick={onClose}
            >
               X
            </button>
            )}

          { !onClose ? <div className='idDiv'>{id}</div> : <div></div>}

         <Link to={`/detail/${id}`} >
         <img 
              className = 'characterImage'
              src={image} 
              alt={name} 
              />
         </Link>
         
         </div>
         <div className='dataCard'>
            <h2>Name: {name}</h2>
            <h2>Status: {status}</h2>
         </div>
      </div>
      )
}

const mapDispatchToProps = (dispatch) => {
   return {
     addFavorites: ( character ) => {
       dispatch(addFavorites( character ))
     },
     deleteFavorites: (id) => {
       dispatch(deleteFavorites(id))
     }
   }
  }

  const mapStateToProps = ( state ) => {
   return {
     myFavorites: state.myFavorites
   }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Card);

  // export default connect(null,mapDispatchToProps)(Card)