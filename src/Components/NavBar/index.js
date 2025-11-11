import React from "react";
import "./index.scss";

function NavBar() {
  return (
    <nav>
      <a href="#home">
        <div className="logo">MicroMouse @ MSU</div>
      </a>
      <a href="#about" className="links">
        <div className="btn-container">About</div>
      </a>
      <a href="#contact" className="links">
        <div className="btn-container">Contact</div>
      </a>
      <a href="#faq" className="links">
        <div className="btn-container">FAQ</div>
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScVYWLyfLbmftAKwKQtKJ1kPWdG1rw9EM3_7uZZrm6KKci1Fw/viewform?usp=header"
        className="links"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <div className="btn-container">Register</div>
      </a>
    </nav>
  );
}

export default NavBar;
