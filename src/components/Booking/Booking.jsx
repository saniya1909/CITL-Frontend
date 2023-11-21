import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./booking.css";
import { AuthContext } from "../../context/AuthContext.js";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { price, reviews } = tour;
  const navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({
    userId: "01", 
    userEmail: "exaple@gmail.com",
    fullName: "",
    phone: "",
    guestSize: "05",
    bookAt: "",
  });
  const serviceFee = 500;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //   Send data to server
  const handleClick = async (e) => {
    e.preventDefault();
    if (!user || user === undefined || user === null) {
      alert("Please Sign in");
      return;
    }

    // Validate if all required fields are filled
    if (!credentials.fullName || !credentials.phone || !credentials.bookAt || !credentials.guestSize) {
        // Handle the case when any of the required fields is empty
        alert("Please fill in all required fields");
        return;
    }

    try {
       const tourResponse = await fetch(`${BASE_URL}/tours/${id}`);
       const tourData = await tourResponse.json();

        if (!tourResponse.ok) {
            alert("Failed to fetch tour data. Please try again later.");
            return;
        }
        console.log(tourData.data.title);
        const response = await fetch(`${BASE_URL}/booking`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: user?._id,
                userEmail: user?.email,
                fullName: credentials.fullName,
                guestSize: credentials.guestSize,
                phone: credentials.phone,
                bookAt: credentials.bookAt,
                totalAmount: totalAmount,
                tourName: tourData.data.title,
            }),
        });

        if (response.ok) {
            alert("Booking successful! Redirecting to thank you page.");
            navigate("/thank-you");
        } else {
            alert("Booking failed. Please try again later.");
        }
    } catch (error) {
        console.error("Error making booking request:", error);
        alert("Booking failed. Please try again later.");
    }
};

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   navigate("/thank-you");
  // };
  
  return (
    <div className="booking">
      <div className="booking-top">
        <h3>
          Rs{price} <span>/per person</span>{" "}
        </h3>
        <span>
          <i class="fa-solid fa-star"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* booking form  */}
      <div className="booking-form">
        <h5>Information</h5>
        <form className="booking-info-form" onSubmit={handleClick}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </div>
          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      {/* booking bottom  */}
      <div className="booking-bottom">
        <div className="list-group">
          <div className="list-item">
            <h5>
              Rs{price} <i class="ri-close-fill"></i> 1 person
            </h5>
            <span>Rs{price}</span>
          </div>
          <div className="list-item">
            <h5>Service charge</h5>
            <span>Rs500</span>
          </div>
          <div className="list-item total">
            <h5>Total</h5>
            <span>Rs{totalAmount}</span>
          </div>
        </div>
        <button className="btn primary__btn" onClick={handleClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
