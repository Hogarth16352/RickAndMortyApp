import style from '../../styles/SearchBar.css';

export default function SearchBar(props) {
   return (
      <div className="nav">
         <input className = 'searchInput' type='search' placeholder = "Ingresa ID a buscar"/>
         <button className = 'searchButton' onClick={ () => props.onSearch() }>+</button>
      </div>
   );
}
