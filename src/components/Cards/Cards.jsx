import Card from '../Card/Card';
import '../../styles/Cards.css';
import 'animate.css';
 

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className='containerCards'> {
         characters.map(character => (
         <Card 
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            status={character.status}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose = { () => props.onClose(character.id) }
            />
            
         ))}
      </div>
      );
}