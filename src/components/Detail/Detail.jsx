import "../../styles/Detail.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Detail(props) {

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => {
          const char = response.data;
          if (char.name) {
            setCharacter(char);
          } 
        })
      return setCharacter({});
    }, [detailId]);
      
    return (
        <div className = "detailsContainer">
          <p className = "firstItem">
            <strong>NAME: </strong> {character.name}
          </p>
            <img 
              className = "col characterImage"
              src={character.image} alt={character.name} />
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
                <p><strong>Origin: </strong>{character.origin.name}</p>
              }
            </div>
            <Link to="/home">
              <div >
                  <button className="backButton">Go Back</button>
              </div>
            </Link>
        </div>

    )
}