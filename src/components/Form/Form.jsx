import React from 'react';
import '../../styles/Form.css'
import validation from './validation';


export default function Form(props) {

    const [userData, setUserData] = React.useState({ 
      username: "alan@mail.com",
      password: '123456' 
    });

    const [errors, setErrors] = React.useState({
      username: '', 
      password: '' 
    });

    const handleInputChange = (event) => {

      const property = event.target.name;
      const value = event.target.value;

      setUserData({ 
        ...userData, 
        [property]: value 
      });

      setErrors(
        validation({
          ...userData,
          [property] : value
          })
        )
    };

    const handleSubmit = (event) => { 
      event.preventDefault();
      props.login(userData);
    }

    // const handleSubmit = ( event ) => { 
    //   event.preventDefault();
    //   if ( !userData.username || !userData.password ) {
    //     setErrors(
    //       validation({
    //         ...userData
    //         })
    //       )
    //   } else {
    //     props.login(userData);
    //     setUserData({
    //       username: '', 
    //       password: ''
    //     });
    //   }
    // };

    return (
      <div className = "formDiv">
        <div className="formImage"></div>
      <form className = "formContainer"
        onSubmit={handleSubmit}>
        <div className='formTitle'>Welcome to Rick and Morty App</div>
        <label htmlFor='username'>
        Username: 
        </label>
        <input 
            placeholder='Username'
            type="text" 
            name="username"     
            value={userData.username} 
            onChange={handleInputChange} 
            className={errors.username ? 'errorInput' : ''}
            />
          {errors.username && <p className='error'>{errors.username}</p>}

      <label htmlFor='password'>
        Password: 
      </label>
        <input 
            placeholder='Password'
            type="password"     
            name="password" 
            value={userData.password} 
            onChange={handleInputChange}
            className={errors.password ? 'errorInput' : ''}

            />
          {errors.password && <p className='error' >{errors.password}</p>}


      <hr />
      <button type = 'submit'
      className="buttonForm"
      >LOGIN</button>
      </form>
      </div>
    );
}