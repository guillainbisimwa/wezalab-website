import React from "react";
import hero from "../assets/images/hero.svg";
import logo from "../assets/images/logo.png";

const Header = () =>{
    return <header id="home">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
      
        <a className="navbar-brand" href="#"><img src={logo} className="logo-size" alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div className="interactive-menu-button">
            <a href="#">
              <span>Menu</span>
            </a>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" data-scroll href="#home">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#contact-us">Contact Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">EN </a>
                <a className="dropdown-item" href="#">FR </a>
              </div>
            </li>
          </ul>
          <form data-scroll href="#contact-us" className="contact-btn form-inline my-2 my-lg-0">
            <button>Contact Us</button>
          </form>
        </div>
      </nav>
    </div>
    <div className="container-fluid hero mar-50">
      <img src={hero} alt="" />
      
      <div className="container">
        <h1>Innovate, Impact <br />Empower.</h1>
        <p>Together, we can unlock the full potential of technology <br /> and drive positive change in our society.</p>
        <div className="hero-btns">
          <a data-scroll href="#about-us">More About us</a>
          <a data-scroll href="#contact-us">Get in Touch.</a>
        </div>
      </div>
    </div>
  </header>
}

export default Header;
