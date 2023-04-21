import { useState } from 'react';
import '../../styles/SearchBar.css';

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = element => {
      const {value} = element.target;
      setCharacter(value);
   }

   const handleSearch = () => {//Para limpiar el contenedor despues de cada busqueda
      props.onSearch(character);
      setCharacter("");
   }

   const randomSearch = () => {//Para limpiar el contenedor despues de cada busqueda
      props.onSearch(Math.floor(Math.random() * 826) + 1);
      setCharacter("");
   }

   return (
      <div className="nav">
         <input 
            className = 'searchInput' 
            type='search' 
            placeholder = "Ingresa ID a buscar"
            value = {character}
            onChange={handleChange}
         />
         <button 
            className = 'addButton' 
            onClick={ handleSearch }
         >+</button>
         <button 
            className = 'randomButton'
            onClick={ randomSearch }>
            R
         </button>
      </div>
   );
}
