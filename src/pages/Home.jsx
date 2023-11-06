import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/HomePage.png";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
