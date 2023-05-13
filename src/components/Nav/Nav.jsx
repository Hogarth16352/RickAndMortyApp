import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { FaRegMoon } from 'react-icons/fa';
import "../../styles/Nav.css";
import { FaRegSun } from 'react-icons/fa';
import { useEffect, useState } from "react";


export const Nav = ( props ) => {

      const [isMoonIcon, setIsMoonIcon] = useState(true);
    
      useEffect(() => {
        const bodyVery = document.querySelector('#body');
    
        const handleClick = () => {
          bodyVery.classList.toggle('mood');
          setIsMoonIcon(!isMoonIcon);
        }
    
        const moodItem = document.querySelector('.mood-item');
        moodItem.addEventListener('click', handleClick);
    
        return () => {
          moodItem.removeEventListener('click', handleClick);
        }
      }, [props.onSearch, props.resetState, isMoonIcon]);
    
      return (
       <div className="wrapper">
          <div className="navbar">
             <div className="menu">
                <ul>
                <li>
                <NavLink to="/home">
                   <button className="buttonNav">Home</button>
                </NavLink>
                </li>
                <li>
                   <NavLink to="/favorites">
                      <button className="buttonNav">Favorites</button>
                   </NavLink>            
                </li>
                <li>
                   <NavLink to="/portflio">
                      <button className="buttonNav">Portfolio</button>  
                   </NavLink>
                </li>
                <li>
                   <NavLink to="/about">
                      <button className="buttonNav">AboutMe</button>  
                   </NavLink>
                </li>
                </ul>
             </div>
             <SearchBar onSearch={props.onSearch} resetState={props.resetState}/>
             <div className="logoutContainer">
                <ul>
                <li>
                   <button className="buttonNav mood-item">
                     {isMoonIcon ? (
                       <FaRegMoon className="moodIcon" size={35}/>
                     ) : (
                       <FaRegSun className="moodIcon" size={35}/>
                     )}
                   </button>  
                </li>
    
                   <li>
                   <NavLink to="/">
                      <button className="buttonNav"><RiLogoutBoxRFill className="logoutIcon" size={40}/></button>  
                   </NavLink>
                   </li>
                </ul>
             </div>
          </div>
       </div>
      )
    }