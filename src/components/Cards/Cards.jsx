import Card from '../Card/Card';
import '../../styles/Cards.css';
 

export default function Cards( { characters } ) {
   return (
      <div className='containerCards'>{
         characters.map( ({ id, name, status, species, gender, origin, image, onClose })  => {
            return <Card 
            key={id}
            name={name}
            species={species}
            status={status}
            gender={gender}
            // origin={origin.name}
            image={image}
            onClose = {onClose}
            />
            
         })
         }
      </div>
      );
}