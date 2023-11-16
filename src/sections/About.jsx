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
          {/* <h2>Join us at <br /> WEZA LAB</h2> */}
          {/* <p> 
            Weza Lab is a leading Congolese start-up bringing together technology, research, and social empowerment to create meaningful change in the Democratic Republic of the Congo.</p>
            Weza Lab is more than just a technology start-up. We are a team of researchers, developers and specialists united by our shared passion to drive societal change and to contribute to sustainable development in the Democratic Republic of the Congo. */}

          <p>Weza Lab provides bespoke software solutions catered to distinctive community needs, addressing critical societal challenges.
            Our initiatives address a multiverse of sectors, including health, agriculture, climate action, connectivity, and open-source development.
            At Weza Lab, we believe in collaboration and inclusivity. Our multidisciplinary team comprises professionals passionate about creating social impact through technological advancement.
            Choosing Weza Lab means choosing a partner committed to fostering positive change, driving innovation, and prioritizing inclusivity and sustainability. Together, let's shape the future we aspire to. </p>
        </div>
      </div>
    </div>
  </section>
}

export default About;
