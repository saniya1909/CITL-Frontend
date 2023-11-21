import React, { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import "../styles/tour-details.css";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import NewsLetter from "../shared/news-letter/NewsLetter";
import { OpenCageGeocode } from 'opencage-api-client'; // Update the import
import { geocode } from 'opencage-api-client'; // Update the import
import axios from 'axios'; 

import { AuthContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { YOUR_OPENCAGE_API_KEY } from "../utils/config";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const [cityCoordinates, setCityCoordinates] = useState([15.3004543, 74.0855134]);
  useEffect(() => {
    const getCityCoordinates = async () => {
      try {
        if (!city || (cityCoordinates[0] !== 0 && cityCoordinates[1] !== 0)) {
          return;
        }
  
        const response = await geocode({
          key: YOUR_OPENCAGE_API_KEY,
          q: city,
        });
  
        if (response.results.length > 0) {
          const { lat, lng } = response.results[0].geometry;
          setCityCoordinates([lat, lng]);
        } else {
          console.error('No results found for the city:', city);
        }
      } catch (error) {
        console.error('Error fetching city coordinates:', error);
      }
    };
  
    getCityCoordinates();
  }, [city, cityCoordinates[0], cityCoordinates[1]]);

  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        if (!city || (weatherData && weatherData.current)) {
          return;
        }

        const response = await axios.get(`https://weather-api-by-any-city.p.rapidapi.com/weather/${city}`, {
          headers: {
            'X-RapidAPI-Key': '688c7d00fdmshf26ceb64225f4e0p1c3004jsn72834c6e2472',
            'X-RapidAPI-Host': 'weather-api-by-any-city.p.rapidapi.com',
          },
        });

        if (response.status === 429) {
          // Handle rate limit exceeded
          console.error('Rate limit exceeded. Too many requests.');
          return;
        }

        const result = response.data;

        if (result) {
          setWeatherData(result);
        } else {
          console.error('Error fetching weather data:', result.message);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    getWeatherData();
  }, [city, weatherData]);


  const options = { day: "numeric", month: "long", year: "numeric" };

  // Submiting request to the server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign in");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }

    alert(`${reviewText}, ${tourRating}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  console.log(cityCoordinates);
  return (
    <>
      <section>
        {loading && <h4>Loading...</h4>}
        {error && <h4>{error}</h4>}
        {!loading && !error && (
          <div className="tourDetail">
            <div className="tour-content ">
              <img src={photo} alt="" />
              <div className="tour-info">
                <h2>{title}</h2>
                <div className="address">
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? "Not rated" : <span>({reviews?.length})</span>}
                  </span>
                  <span>
                    <i className="fa-solid fa-location-crosshairs"></i>
                    {address}
                  </span>
                </div>
                <div className="tour-extra-details">
                  <span>
                    <i className="ri-map-pin-user-line"></i>
                    {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i>
                    {price}/per person
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line"></i>
                    {distance} k/m
                  </span>
                  <span>
                    <i className="ri-group-line"></i>
                    {maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
                <div>
        <h2>Weather Data</h2>
        {weatherData ? (
          <div>
            <p>Temperature: {weatherData.current.temp_c} °C / {weatherData.current.temp_f} °F</p>
            <p>Condition: {weatherData.current.condition.text}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
              </div>

              {/* Tour reviews section  */}
              <div className="tour-review">
                <h4>Reviews and Local Insights! ({reviews?.length} reviews)</h4>
                <form onSubmit={submitHandler}>
                  <div className="review-starts">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <span key={rating} onClick={() => setTourRating(rating)}>
                        {rating} <i className="ri-star-fill"></i>
                      </span>
                    ))}
                  </div>
                  <div className="review-input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your Insights"
                      required
                    />
                    <button className="btn primary__btn text-white" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
                <div className="user-reviews">
                  {reviews?.map((review, index) => (
                    <div key={index} className="review-items">
                      <img src={avatar} alt="" />
                      <div style={{ width: "100%" }}>
                        <div className="user-detail">
                          <div>
                            <h6>{review.username}</h6>
                            <p>
                              {new Date(review.createdAt).toLocaleDateString("en-India", options)}
                            </p>
                          </div>
                          <span>
                            {review.rating} <i className="ri-star-fill"></i>
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tour-right">
              <Booking tour={tour} avgRating={avgRating} />
            </div>
          </div>
        )}
      </section>
      <MapContainer center={cityCoordinates} zoom={3} style={{ height: "300px", width: "100%" }}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  {cityCoordinates && (
    <Marker position={cityCoordinates}>
      <Popup>Your Tour City <br /></Popup>
    </Marker>
  )}
</MapContainer>
      <NewsLetter />
    </>
  );
};

export default TourDetails;
