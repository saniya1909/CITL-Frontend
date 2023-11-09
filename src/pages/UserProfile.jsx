import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserLayout from '../components/Layout/UserLayout';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [itineraries, setItineraries] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get('http://localhost:8080/api/users/all').then((response) => {
      setUserData(response.data);
    });

    // Fetch booked itineraries
    axios.get('http://localhost:8080/api/tours').then((response) => {
      setItineraries(response.data);
    });

    // Fetch hotel bookings
    axios.get('http://localhost:8080/api/bookings').then((response) => {
      setHotelBookings(response.data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/login'; // You may consider using React Router for navigation
  };

  return (
    <UserLayout>
      <div className="user-profile">
        <h1>User Profile</h1>
        {userData && (
          <div>
            <h2>{userData.username}</h2>
            <p>Email: {userData.email}</p>
            {/* Display other user details */}
          </div>
        )}

        <div>
          <h2>Booked Itineraries</h2>
          <ul>
            {itineraries.map((itinerary) => (
              <li key={itinerary.id}>{itinerary.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Hotel Bookings</h2>
          <ul>
            {hotelBookings.map((booking) => (
              <li key={booking.id}>{booking.hotelName}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </UserLayout>
  );
};

export default UserProfile;
