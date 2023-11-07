import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserLayout from "../components/Layout/UserLayout"; // Import UserHeader component
// import '../styles/UserProfileStyles.css'; // Import UserProfile styles

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [bookedTours, setBookedTours] = useState([]);
  const [bookedHotels, setBookedHotels] = useState([]);

  useEffect(() => {
    // Fetch user data using the stored access token
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://localhost:8080/api/users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setUserData(response.data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      // Handle errors, e.g., redirect to login page if token is invalid/expired
    });

    // Fetch user's booked tours
    axios.get('http://localhost:8080/api/users/bookedTours', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setBookedTours(response.data);
    })
    .catch(error => {
      console.error('Error fetching booked tours:', error);
    });

    // Fetch user's booked hotels
    axios.get('http://localhost:8080/api/users/bookedHotels', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setBookedHotels(response.data);
    })
    .catch(error => {
      console.error('Error fetching booked hotels:', error);
    });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="user-profile-container">
      <UserLayout> 
      {userData ? (
        <div className="user-profile-content">
          <div className="user-details">
            <h2>Welcome, {userData.name}!</h2>
            <p>Email: {userData.email}</p>
            {/* Display more user-specific information here */}
          </div>
          <div className="booked-tours">
            <h3>Booked Tours:</h3>
            <ul>
              {bookedTours.map(tour => (
                <li key={tour.id}>{tour.name}</li>
              ))}
            </ul>
          </div>
          <div className="booked-hotels">
            <h3>Booked Hotels:</h3>
            <ul>
              {bookedHotels.map(hotel => (
                <li key={hotel.id}>{hotel.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Logout</p>
      )}
    </UserLayout>
    </div>
  );
};

export default UserProfile;
