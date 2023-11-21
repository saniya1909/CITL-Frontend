import React from "react";
import "./service.css";

import weatherImg from "../assets/images/weather.png";
import guidImg from "../assets/images/guide.png";
import customizeImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Current Weather of the place will be display with forrecast to plan yout upcoming trip",
  },
  {
    imgUrl: guidImg,
    title: "Best Tour Guide with Full Package Booking",
    desc: "One of the best Tour Guide in the town",
  },
  {
    imgUrl: customizeImg,
    title: "CustomizationLocal Insights and Reviews",
    desc: "Local suggestion which will make yout trip memorable",
  },
];

const Service = () => {
  return (
    <>
      {serviceData.map((data) => {
        return (
          <div className="service-item">
            <img src={data.imgUrl} alt="" />
            <h5>{data.title}</h5>
            <p>{data.desc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Service;
