import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import "../../styles/Nav.css";


export const Nav = ( props ) => {
  return (
    <div className="navContainer">
        <NavLink to="/about">
            <button>About</button>
         </NavLink>

         <NavLink to="/home">
            <button>Home</button>
         </NavLink>

         <SearchBar onSearch={props.onSearch} />

         <NavLink to="/">
            <button>Logout</button>
         </NavLink>
    </div>
  )
}