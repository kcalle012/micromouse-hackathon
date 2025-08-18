import React from "react";
import "./index.scss";

function NavBar() {
  return (
    <nav>
      <a href="#home">
        <div className="logo">MicroMouse</div>
      </a>
      <a href="#about" className="links">
        <div className="btn-container">About</div>
      </a>
      <a href="#contact" className="links">
        <div className="btn-container">Contact</div>
      </a>
      <a
        href="https://google.com"
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
