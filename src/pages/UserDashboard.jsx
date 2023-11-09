
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserLayout from '../components/Layout/UserLayout';
import { Link } from 'react-router-dom';
import Banner from '../images/HomePage.png';
import '../styles/UserDashboardStyles.css';

const UserDashboard = () => {
  // Retrieve the user data from localStorage (you may need to adjust this based on your application)

  return (
    <UserLayout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <div className="writing">
            <h1>Get Ready To Explore</h1>
            <p>
              World with <span style={{ color: "black" }}>Getaway</span>
            </p>
          </div>
          <div className="home-page-button">
            <Link to="/Tour">
              <button>Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
