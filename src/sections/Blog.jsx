import React from "react";

import afia from '../assets/images/aside4.svg'

const Blog = () => {
    return <section id="blog" class="blog">
    <div class="container-fluid">
      <div class="blog-aside">
        <img src={afia} alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5>BLOG STORIES</h5>
            <h2>Check Our News</h2>
          </div>
        </div>
        <div id="blog-drag" class="row blog-slider">
          <div class="col-12 col-lg-4 blog-box blog-first">
            <h6>Addressing Local Challenges</h6>
            <p>01 January 2022</p>
            <p>WEZA LAB focuses on using AI to address local challenges in the region, such as healthcare, agriculture, finance, and education...</p>
          </div>
          <div class="col-12 col-lg-4 blog-box">
            <h6>Research and Innovation</h6>
            <p>17 December 2022</p>
            <p> As a leading school of AI, WEZA LAB conducts cutting-edge research and fosters a culture of innovation in Goma, DRC...</p>
          </div>
          <div class="col-12 col-lg-4 blog-box">
            <h6>Social Impact</h6>
            <p>28 March 2013</p>
            <p>WEZA LAB is committed to driving positive social impact through its AI initiatives. This advantage allows the school to leverage AI...</p>
          </div>
          
        </div>
        <button class="hide-me" id="blog-btn">Show More Stories</button>
      </div>
    </div>
  </section>  
}

export default Blog;
