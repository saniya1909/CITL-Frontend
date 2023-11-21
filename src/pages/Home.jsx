import React from "react";
import "../styles/home.css";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";
import Searchbar from "../shared/Searchbar";
import Service from "../services/Service";
import FeaturedProduct from "../components/featured-products/FeaturedProduct";
import NewsLetter from "../shared/news-letter/NewsLetter";

const Home = () => {
  return (
    <>
      {/* Hero section  */}
      <section className="home">
        <div className="row">
          <div className="left">
            <h1>
              GetAway:Find Your Way{" "}
              <span className="highlight">Your Own Tour Website</span>
            </h1>
            <div className="hero-content ">
            <img src={worldImg} alt="" />
            <Subtitle subtitle="Explore the world, Go on a Adventure!!" />
            </div>
            <p>
              Find your way with a Getaway vacation with yout familr or friends.Have a moment of your life. Remember memories , Capture Moments!!
            </p>
          </div>
          <div className="right">
            <div className="hero-img-box" style={{ marginTop: "0px" }}>
              <img src={heroImg} alt="" />
            </div>
            <div className="hero-img-box" style={{ marginTop: "80px" }}>
              <video src={heroVideo} alt="" controls />
            </div>
            <div className="hero-img-box" style={{ marginTop: "120px" }}>
              <img src={heroImg2} alt="" />
            </div>
          </div>
        </div>
        <Searchbar />
      </section>

      <section className="service">
        <div className="services">
          <div className="row">
            <div className="left">
              <h5 className="service-subtitle">What we serve</h5>
              <h2>We offer our best services</h2>
            </div>
            <div className="right">
              <Service />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="featurePro">
          <div className="featureLeft">
            <Subtitle subtitle={"Explore"} />
            <h2>Our featured tours</h2>
          </div>
          <div className="featuredWrap">
            <FeaturedProduct />
          </div>
        </div>
      </section>

      {/* Experience Section  */}
      <section className="exp">
        <div className="experience">
          <div className="row">
            <div className="left">
              <Subtitle subtitle="Experience" />
              <h1>With our all experience we will serve you</h1>
              <p>
                Don't trust us??, Try use once and you would enjoy the best of the placest with their local insights and special place suggestions.
              </p>
              <div className="expBtnWrap">
                <div className="expbtn">
                  <span>50+</span>
                  Successful Trips
                </div>
                <div className="expbtn">
                  <span>2k+</span>
                  Regular Clients
                </div>
                <div className="expbtn">
                  <span>15</span>
                  Years Experience
                </div>
              </div>
            </div>
            <div className="right">
              <img src={experienceImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* News Letter Section  */}
      <section className="newsletter">
        <NewsLetter />
      </section>
    </>
  );
};

export default Home;
