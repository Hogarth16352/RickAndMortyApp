export default function validation( userData ){

    const regexEmail = /\S+@\S.\S+/;
    const regexPass = new RegExp("[0-9]");
    const errors = {};

    if( !regexEmail.test(userData.username) ){
      errors.username = 'Debe ser un email válido';
    }
     
    if(!userData.username){
      errors.username = 'El nombre es obligatorio';
    }

    if(!userData.username.length > 35){
        errors.username = 'El nombre de usuario no puede tener mas de 35 caracteres';
      }

    if(!userData.password){
      errors.password = 'La contraseña es obligatoria';
    }

    if( userData.password.length > 0 && !regexPass.test(userData.password) ){
       errors.password = 'La contraseña debe tener al menos un número';
    }

    if( userData.password.length > 0 && userData.password.length < 8 ){
        errors.password = 'La contraseña debe tener al menos 8 caracteres';
     }

  return errors;

}