import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from './components/Cards/Cards.jsx';
import { Nav } from './components/Nav/Nav';
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from './components/Form/Form';
import NotFound from "./components/NotFound/NotFound";
import Favorites from "./components/Favorites/Favorites";


function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const username = "alan@mail.com";
   const password = "123456";
   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
       }
     }

    const logout = () => {
      setCharacters([]);
      setAccess(false);
      navigate('/');
   }
 

   useEffect( () => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {

      //const URL_BASE = "https://be-a-rym.up.railway.app/api"
      //const KEY = "2d0fd52418f5.d36077a3b4c1857914f"
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      //axios( `${URL_BASE}/character/${id}?key=${KEY}` ).then(({ data }) => {
         if (data.name) {
            const characterExists = characters.find((char) => char.id === data.id);//Se busca el personaje en el estado
            if (!characterExists) {//Si no existe muestra el estado con las imagenes solicitadas
              setCharacters((oldChars) => [ data, ...oldChars]);
            }else{
               window.alert("No hay ningún personaje con ese ID");
            }
          }else {
            window.alert("Ingresa un ID válido, hay 826 personajes en Rick and Morty");
          }
      });
   }
   
   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
    };

   const resetState = () => {
      setCharacters([]);
    }

    const location = useLocation();

   return (
      <div className='App' >
         {/* <Nav  onSearch={onSearch}/>
         <Cards characters={characters}  onClose={onClose}/> */}
         {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} resetState={resetState} />}

         <Routes>
            <Route exact path="/" element={<Form login={login} />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} /> } />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
      
   );
}

export default App;
