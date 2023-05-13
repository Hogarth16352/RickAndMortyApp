import "../../styles/Detail.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Detail(props) {

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
      // axios.get(`https://rickandmortyapi.com/api/character/${detailId}`)
      axios.get(`http://localhost:3001/rickandmorty/character/detail/${detailId}`)
        .then((response) => {
          const char = response.data;
          if (char.name) {
            setCharacter(char);
          } 
        })
      return setCharacter({});
    }, [detailId]);
      
    return (
      <>
      <header>
            <h1 className = "firstItem">
              {character.name}
            </h1>
          </header>
        <div className = "detailsContainer">
          <div className = "imageDetail">
            <img 
              src={character.image} 
              alt={character.name} />
          </div>
          <div  className = "characterDetails">
            <p>
                <strong>STATUS: </strong> {character.status}
            </p>
            <p>
                <strong>SPECIE: </strong> {character.species}
            </p>
            <p>
                <strong>GENDER: </strong> {character.gender}
            </p>
            {
              character.origin && 
              <p><strong>ORIGIN: </strong>{character.origin.name}</p>
            }
          </div>
            <div className = "buttonBackDiv" >
              <Link to="/home">
                  <button className="backButton">Go Back</button>
              </Link>
            </div>
        </div>
        </>
    )
}