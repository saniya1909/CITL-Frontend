import React from 'react';
import RegisterLogo from "../images/register-right-logo.png";
import "../styles/RegisterPageStyles.css";

const RegisterPage = () => {
  return (
    <>
    <div className='main-register-page'>
        <div className='register-left'>
            <img src={RegisterLogo} alt='' />
        </div>
        <div className='register-right'>
            <div className='main-register-form'>
                <div className='register-form-header'>Sign up for an Getaway</div>
                <div className='register-form'>
                    <div className='name`'>
                        <input placeholder='First name' type='text' required="true" />
                        <input placeholder='Last name' type='text' required="true" />
                    </div>
                    <input placeholder='Last name' type='email' required="true" />
                    <input placeholder='Password' type='password' required="true" />
                    <button type='submit'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default RegisterPage;