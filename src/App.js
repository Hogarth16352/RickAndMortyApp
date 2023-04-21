import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { Nav } from './components/Nav/Nav';

function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const characterExists = characters.find((char) => char.id === data.id);//Se busca el personaje en el estado
            if (!characterExists) {//Si no existe muestra el estado con las imagenes solicitadas
              setCharacters((oldChars) => [ data, ...oldChars]);
            } 
          }else {
            window.alert("No hay personajes con ese ID");
          }
      });
   }
   const onClose = (id) => {
      // [ 4, 5, 7]
      setCharacters(characters.filter((char) => char.id !== id));
    };

   return (
      <div className='App'>
         <Nav  onSearch={onSearch}/>
         <Cards characters={characters}  onClose={onClose}/>
      </div>
      
   );
}

export default App;
