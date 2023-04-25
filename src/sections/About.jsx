import React from "react";

import about from '../assets/images/aboutimg.svg'

const About = () => {
    return <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-lg-6">
          <img src={about} alt="" />
        </div>
        <div class="col-12 col-sm-12 col-lg-6">
          <h5>OUR COMPANY</h5>
          <h2>Join us at <br /> WEZA LAB</h2>
          <p> We are a Congolese start-up dedicated to fostering scientific research and collaboration in cutting-edge fields, including artificial intelligence (AI) and machine learning (ML). 
            We are addressing local challenges, research and innovation, and social impact. </p>
        </div>
      </div>
    </div>
  </section>
}

export default About;
