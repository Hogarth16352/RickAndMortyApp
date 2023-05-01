import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { addFavorites, deleteFavorites, filterCards, orderCards } from "../../redux/actions/actions";
// import { connect } from "react-redux";
import '../../styles/Favorites.css';

const Favorites = () => {

  const favorites = useSelector( (state) => state.myFavorites );

  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    dispatch(orderCards(e.target.value));
  }

  const handleFilterChange = (e) => {
    dispatch(filterCards(e.target.value));
  }

  return (

    <div>
      <div className='selectDiv'>
      <h1 className="sectionTitle">Favorites</h1>
        <select className='order-menu' name="order" value="1" onChange={handleOrderChange}>
          <option value="1" disabled hidden>Ordenar</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>      
        <select className='filter-menu' name="filter" value="1" onChange={handleFilterChange}>
          <option value="1" disabled hidden>Filtrar</option>
          <option value="id">Id</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {
        favorites.map( ( {id, name, species, gender, status, origin, image } ) => {
          const actions = {
            addFavorites: addFavorites,
            deleteFavorites: deleteFavorites,
          };
          return(
            <div 
              key={id}            
              className = "containerFavs">
              <Card 
              id={id}
              name={name}
              species={species}
              status={status}
              gender={gender}
              origin={origin.name}
              image={image}
              {...actions}
              />
            </div>
          );
        }
      )
      }  
    </div>
  )
}


export default Favorites;


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFavorites: (character) => {
//       dispatch(addFavorites(character));
//     },
//     deleteFavorites: (id) => {
//       dispatch(deleteFavorites(id));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(Favorites);
