import React from "react";

import afia from '../assets/images/afia2.png'
import tvws from '../assets/images/tvws.png'
import climat from '../assets/images/climat.png'

const Portfolio = () => {
    return <section id="projects" class="portfolio">
      <div class="container-fluid">
        <div class="portfolio-aside">
          <img src="images/aside3.svg" alt="" />
        </div>
        <div class="container">
          <div class="row">
          <div class="col-12">
            <h5>OUR PROJECTS</h5>
            <h2>See some of our projects.</h2>
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

            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    <img src={tvws} class="photobox__preview" alt="Preview" />
                    <span class="photobox__label">Connecting Rural Areas with TVWS Technology</span>
                  </div>
                </div>
            </div>

            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    <img src={climat} class="photobox__preview" alt="Preview" />
                    <span class="photobox__label">A peer-to-peer network of young climate activists </span>
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
