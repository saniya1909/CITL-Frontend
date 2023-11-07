import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserLayout from '../components/Layout/UserLayout';
import { Link } from 'react-router-dom';
import Banner from '../images/HomePage.png';
import '../styles/UserDashboardStyles.css';
import { jwtDecode } from "jwt-decode"; // Import all exports from jwt-decode as jwtDecode

export default function UserDashboard(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const tokenCookie = document.cookie.match(/token=([^;]+)/)?.[1];
    if (!tokenCookie) {
      // Redirect to login page or handle not logged in user
      return;
    }

    const decodedToken = jwtDecode(tokenCookie);
    console.log('Token Cookie:', tokenCookie);
    console.log('Decoded Token:', decodedToken);

    const fetchUserDetails = async () => {
      try {
        const username = decodedToken.username;
        const response = await axios.post('http://localhost:8080/api/user/all', { username });
        setUserData(response.data.userDoc);
      } catch (error) {
        // Handle API request errors (e.g., network issues, server errors)
        console.error('Error fetching user data:', error);
        // You can set an error state here if needed
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  if (!userData) {
    // Loading state or redirect to a loading component
    return <p>Loading user data...</p>;
  }

  return (
    <div className="user-dashboard-container">
      <UserLayout>
        {userData ? (
          <div className="dashboard-content">
            <div className="user-details">
              <h2>Welcome, {userData.username}!</h2>
              <p>Email: {userData.email}</p>
              {/* Display more user-specific information here */}
            </div>
            <div className="dashboard-actions">
              {/* Add user actions, buttons, and other interactive elements here */}
              <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="headerContainer">
                  <div className="writing">
                    <h1>Get Ready To Explore</h1>
                    <p>
                      World with <span style={{ color: 'black' }}>Getaway{userData.username}</span>
                    </p>
                  </div>
                  <div className="home-page-button">
                    <Link to="/Tour">
                      <button>Explore Tours</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </UserLayout>
    </div>
  );
}
