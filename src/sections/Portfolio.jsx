import React from "react";

import one from '../assets/images/1.png'
import two from '../assets/images/2.png'
import afia from '../assets/images/afia2.png'

const Portfolio = () => {
    return <section id="projects" class="portfolio">
      <div class="container-fluid">
        <div class="portfolio-aside">
          <img src="images/aside3.svg" alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2>See some of our<br />projects.</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    <img src={afia} class="photobox__preview" alt="Preview" />
                    <span class="photobox__label">Perinatal Care Revolution</span>
                  </div>
                </div>
            </div>
            {/* <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    <img src={two} class="photobox__preview" alt="Preview" />
                    <span class="photobox__label">Awesome Work</span>
                  </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    <img src={one} class="photobox__preview" alt="Preview" />
                    <span class="photobox__label">Awesome Work</span>
                  </div>
                </div>
            </div> */}
          </div>
          
          <div class="row">
            <div class="col-12 more-btn">
              <a class="more-btn-inside">Show More.</a>
            </div>
          </div>
        </div>
      </div>
    </section>
}

export default Portfolio;
