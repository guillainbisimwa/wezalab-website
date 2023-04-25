import React from "react";

import aside from "../assets/images/aside.svg";
import aside2 from "../assets/images/aside2.svg";
import icon from "../assets/images/service-icon1.svg";

const Service = () => {
    return <section id="about-us" className="services">
    <div className="container-fluid">
      <div className="side-img"> 
        <img src={aside} alt="" />
      </div>
      <div className="side2-img"> 
        <img src={aside2} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-4 service-txt">
            <h2>Contribute to sustainable development</h2>
            <div className="hero-btns service-btn">
              <a data-scroll href="#contact-us">Get in Touch</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="service-box">
              <img src={icon} alt="" />
              <h3>Innovation & <br /> technology</h3>
              <p>Our mission is advance the frontiers of technology and drive innovation in Africa</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="service-box">
              <img src={icon} alt="" />
              <h3> Cutting-edge<br />Education</h3>
              <p>Empowering local talents and addressing regional challenges through interdisciplinary projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default Service;