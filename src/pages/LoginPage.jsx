import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../images/login.jpg'; // Ensure correct path to your Login image
import '../styles/RegisterStyles.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password
      });
      const { user } = response.data;
      localStorage.setItem('Email', email);
      alert('User Successfully Logged in');
      console.log('User logged in successfully:', user);
      navigate('/user-dashboard'); // Redirect to dashboard after login
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          // Invalid credentials, show an alert
          alert('Invalid email or password. Please try again.');
        } else {
          // Other login errors, show a generic alert
          alert('Login failed. Please try again later.');
        }
      } else {
        // Network error or server down, show a generic alert
        alert('Network error. Please try again later.');
      }
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='main-register-page'>
      <div className='register-form'>
        <div className='form-layout'>
          <div className='headline'>Sign In to GetaWay</div>
          <div className='tagline'>To travel is to live</div>
          <div className='fill-form'>
            <form className='main-form' onSubmit={handleLogin}>
              <input
                type='text'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='username@gmail.com'
                required
              />
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='Password'
                required
              />
              <button type='submit'>Log In</button>
            </form>
          </div>
          <p className='register' style={{ color: 'green' }}>
            New here? <Link to='/register'>Create an Account</Link>
          </p>
        </div>
      </div>
      <div className='register-right-image'>
        <img src={Login} alt='register-right-logo' />
      </div>
    </div>
  );
};

export default LoginPage;
