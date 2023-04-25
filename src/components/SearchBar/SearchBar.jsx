import { useState } from 'react';
import { FaRandom } from 'react-icons/fa';

import '../../styles/SearchBar.css';

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = element => {
      const {value} = element.target;
      setCharacter(value);
   }

   const handleSearch = () => {
      props.onSearch(character);
      setCharacter("");
   }

   const randomSearch = () => {
      props.onSearch(Math.floor(Math.random() * 826) + 1);
      setCharacter("");
   }

   const handleReset = () => {
      props.resetState();
      setCharacter("");
   }

   return (
      <div className="searchContainer">
         <div className="searchBox">
         <input 
            className = 'searchInput' 
            type='search' 
            placeholder = "Ingresa ID a buscar"
            value = {character}
            onChange={handleChange}
         />
         <button             
            onClick={ handleSearch }
            className = "addButton" 
         >+</button>
         </div>
         <div>
         <button 
            className = 'randomButton'
            onClick={ randomSearch }>
            <FaRandom size={28}/>
         </button>            
         </div>
         <div>
         <button 
            className = 'resetButton'
            onClick={ handleReset }>
            Reset
         </button>            
         </div>
         <div>
            
         </div>
         
      </div>
   );
}