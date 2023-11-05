import React from 'react';
import RegisterLogo from "../images/register-right-logo.png";
import "../styles/RegisterPageStyles.css";
import google from './images/google.png';
import apple from './images/apple.png';

const RegisterPage = () => {
  return (
    <>
    <div className='main-register-page'>
        <div className='register-left'>
            <img src={RegisterLogo} alt='' />
        </div>
        <div className='register-right'>
            <div className='main-register-form'>
                <div className='register-form-header'>Sign up for a Getaway!</div>
                <div className='tagline'>To travel to live</div>
                <div className='google-apple'>
                    <button type='button'><img className="google" alt="Google" src={google} style={{height:'12px'}}/>Sign up with Google</button>
                    <button type='button'><img className="apple" alt="Apple" src={apple} style={{height:'12px'}}/>Sign up with Apple</button>
                
                </div>
                <div className='line'>
                    <hr style={{width:"13rem" }}></hr>
                    <p style={{paddingInline:"0.5rem"}}>or with e-mail</p>
                    <hr style={{width:"13rem" }}></hr>
                </div>
        
                <div className='register-form'>
                    <div className='name' style={{paddingRight:"2rem"}}>
                        <input placeholder='First name' type='text' required="true" />
                        <input placeholder='Last name' type='text' required="true" />
                    </div>
                    <div className='email'>
                    <input placeholder='username@email.com' type='email' required="true" />
                    <input placeholder='Password' type='password' required="true" />
                    </div>
                    
                </div>
                <p style={{textAlign:"center",padding:"1rem"}}>By creating an account, you are agreeing to our Privacy Policy and Electronics Communication Policy</p>  
                <button className='submit' type='submit'>Sign Up</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default RegisterPage;