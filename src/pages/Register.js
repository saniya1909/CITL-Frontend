import React from 'react';
import "../styles/RegisterStyles.css";

import { Link } from 'react-router-dom';
import Login from '../images/login.jpg'

const Register = () => {
  return (
    <div className='main-register-page'>
        <div className='register-form'>
            <div className='form-layout'>

                <div className='headline'>Sign In to GetaWay</div>
                <div className='tagline'>To travel to live</div>

                <div className='fill-form'>
                    <form className='main-form'>
                        <input type='text' required='true' placeholder='username@gmail.com' />
                        <input type='text' required='true' placeholder='Password' />
                        <button type='button'>Log In</button>
                    </form>
                </div>
                <p className='register' style={{color:"green"}}>New here?<Link to="/register">Create an Account</Link></p>
                
            </div>
        </div>
        <div className='register-right-image'>
            <img src={Login} alt='register-right-logo'/>
        </div>
    </div>
  );
};

export default Register;