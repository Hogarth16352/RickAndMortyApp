import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { addFavorites, deleteFavorites } from "../../redux/actions/actions";
import { connect } from "react-redux";
import '../../styles/Favorites.css';

const Favorites = ({ addFavorites, deleteFavorites }) => {

  const favorites = useSelector( (state) => state.myFavorites );

  return (

    <div className='favoriteCards'>
      {
        favorites.map( ( {id, name, species, gender, status, origin, image } ) => {
          const actions = {
            addFavorites: addFavorites,
            deleteFavorites: deleteFavorites,
          };
          return(
            <Card 
            key={id}
            id={id}
            name={name}
            species={species}
            status={status}
            gender={gender}
            origin={origin.name}
            image={image}
            {...actions}
            />
          );
        }
      )}  
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (character) => {
      dispatch(addFavorites(character));
    },
    deleteFavorites: (id) => {
      dispatch(deleteFavorites(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Favorites);
