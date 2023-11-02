import React from 'react';
import "../styles/RegisterStyles.css";
import RegisterRightLogo from "../images/register-right-logo.png";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='main-register-page'>
        <div className='register-form'>
            <div className='form-layout'>
                <div className='headline'>Sign In to GetaWay</div>
                <div className='fill-form'>
                    <form className='main-form'>
                        <input type='text' required='true' placeholder='username@gmail.com' />
                        <input type='text' required='true' placeholder='Password' />
                        <button type='button'>Sign In</button>
                    </form>
                </div>
                <Link to="/register">Register Here</Link>
            </div>
        </div>
        <div className='register-right-image'>
            <img src={RegisterRightLogo} alt='register-right-logo' />
        </div>
    </div>
  );
};

export default Register;