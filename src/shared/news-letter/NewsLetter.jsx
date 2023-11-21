import React from "react";
import "./newsletter.css";

import newsLetterImg from "../../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <>
      <div className="newsLetter">
        <div className="left">
          <h1>Subscribe now to get useful traveling information</h1>
          <span>
            <input type="email" name="" placeholder="Enter your email" id="" />
            <button>Subscribe</button>
          </span>
          <p>
            We will not Disturb you, only valuable offers will be shared which will save you a lot!
          </p>
        </div>
        <div className="right">
          <img src={newsLetterImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
