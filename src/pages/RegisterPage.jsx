import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import RegisterLogo from "../images/register-right-logo.png";
import google from './images/google.png';
import apple from './images/apple.png';
import "../styles/RegisterPageStyles.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        username,
        email,
        password
      });
      
      // Assuming the response contains user and token data
      const { user, token } = response.data;
  
      // Save token to localStorage for future requests (similar to login)
      localStorage.setItem('accessToken', token);
  
      // Handle successful registration, e.g., redirect to dashboard or show a success message
      console.log('User registered successfully:', user);
      navigate('/login'); // Redirect to dashboard after registration
    } catch (error) {
      // Handle registration error
      if (error.response && error.response.status === 400) {
        // User with the provided email already exists, show alert to the user
        alert('User with this email already exists. Please log in.');
      } else {
        // Other registration errors, show a generic error message
        alert('Error registering user. Please try again later.');
      }
      console.error('Registration failed:', error.response);
    }
  };
  

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
              <button type='button'><img className="google" alt="Google" src={google} style={{ height: '12px' }} />Sign up with Google</button>
              <button type='button'><img className="apple" alt="Apple" src={apple} style={{ height: '12px' }} />Sign up with Apple</button>
            </div>
            <div className='line'>
              <hr style={{ width: "13rem" }}></hr>
              <p style={{ paddingInline: "0.5rem" }}>or with e-mail</p>
              <hr style={{ width: "13rem" }}></hr>
            </div>
            <div className='register-form'>
              <div className='name' style={{ paddingRight: "2rem" }}>
                <input placeholder='First name' type='text' name='username' value={username} onChange={handleChange} required />
                <input placeholder='Last name' type='text' required />
              </div>
              <div className='email'>
                <input placeholder='username@email.com' type='email' name='email' value={email} onChange={handleChange} required />
                <input placeholder='Password' type='password' name='password' value={password} onChange={handleChange} required />
              </div>
            </div>
            <p style={{ textAlign: "center", padding: "1rem" }}>By creating an account, you are agreeing to our Privacy Policy and Electronics Communication Policy</p>
            <button className='submit' type='button' onClick={handleRegister}>Sign Up</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
