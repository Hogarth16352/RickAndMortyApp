import Card from './Card';

export default function Cards( props ) {
   const { characters } = props;
   return (
      <div>{
         characters.map( ({ id, name, status, species, gender, origin, image })  => {
            return <Card 
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose = {() => window.alert('Emulamos que se cierra la card')}
            />
         })
         }
      </div>
      );
}