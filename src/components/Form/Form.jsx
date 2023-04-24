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

    return (
      <div className = "formDiv"  >
        <div className='formTitle'>Login Form</div>
      <form className = "formContainer"
        onSubmit={handleSubmit}>
        <label htmlFor='username'>
        Username: 
        </label>
        <input 
        placeholder='Username'
            type="text" 
            name="username"     
            value={userData.username} 
            onChange={handleInputChange} 
            />
          {errors.username && <p style={{ color: 'red' ,
        padding: '25px'}} >{errors.username}</p>}

      <label htmlFor='password'>
        Password: 
      </label>
        <input 
            placeholder='Password'
            type="password"     
            name="password" 
            value={userData.password} 
            onChange={handleInputChange}
            />
          {errors.password && <p style={{ color: 'red' ,
        padding: '25px'}} >{errors.password}</p>}


      <hr />
      <button type = 'submit'
      className="buttonForm"
      >Login</button>
      </form>
      </div>
    );
}