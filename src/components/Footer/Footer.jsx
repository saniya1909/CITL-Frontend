import React from "react";
import "./footer.css";

import logo from "../../assets/images/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-row">
        <div className="foot-left">
          <img src={logo} alt="" />
          <p>
            Find your way with a Getaway
          </p>
          <div className="socials">
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i class="fa-brands fa-youtube"></i>
            </span>
            <span>
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i class="fa-brands fa-pinterest"></i>
            </span>
          </div>
        </div>
        <div className="foot-mid">
          <div className="discover">
            <h6>Discover</h6>
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Tours</a>
            </li>
          </div>
          <div className="Qlink">
            <h6>Quick Links</h6>
            <li>
              <a href="#">Gallery</a>
              <a href="#">Login</a>
              <a href="#">Register</a>
            </li>
          </div>
        </div>
        <div className="foot-right">
          <h6>Contact</h6>
          <div className="contact">
            <span>
              <i class="fa-solid fa-location-dot"></i>
              <b>Address</b>: Andheri, India
            </span>
            <span>
  <i class="fa-solid fa-envelope"></i>
  <b>Email</b>: <a href="mailto:getawayfindyourway@gmail.com">getawayfindyourway@gmail.com</a>
</span>
            <span>
              <i class="fa-solid fa-phone"></i>
              <b>Phone</b>: +91 8450912345
            </span>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright {new Date().getFullYear()}, design and developed by{" "}
        <i>Kunal and Saniya</i>. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
