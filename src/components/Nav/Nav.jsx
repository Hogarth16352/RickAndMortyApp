import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { FaRegMoon } from 'react-icons/fa';
import "../../styles/Nav.css";
import { useEffect } from "react";


export const Nav = ( props ) => {

   useEffect(() => {
      const moodItem = document.querySelector('.mood-item');
      const bodyVery = document.querySelector('#body');
  
      const handleClick = () => {
        bodyVery.classList.toggle( 'mood' );
      }
  
      moodItem.addEventListener('click', handleClick);
  
      return () => {
        moodItem.removeEventListener('click', handleClick);
      }
    }, [props.onSearch, props.resetState]);

  return (
   <div class="wrapper">
      <div class="navbar">
         <div class="menu">
            <ul>
            <li>
               <NavLink to="/home">
                  <button className="buttonNav">Home</button>
               </NavLink>
            </li>
            <li>
               <NavLink to="/favs">
                  <button className="buttonNav">Favorites</button>
               </NavLink>            
            </li>
            <li>
               <NavLink to="/about">
                  <button className="buttonNav">About</button>  
               </NavLink>
            </li>
            </ul>
         </div>
         <SearchBar onSearch={props.onSearch} resetState={props.resetState}/>
         <div class="menu">
            <ul>
            <li>
               <button className="buttonNav mood-item"><FaRegMoon size={40}/></button>  
            </li>

               <li>
               <NavLink to="/">
                  <button className="buttonNav"><RiLogoutBoxRFill size={40}/></button>  
               </NavLink>
               </li>
            </ul>
         </div>
      </div>
   </div>
  )
}