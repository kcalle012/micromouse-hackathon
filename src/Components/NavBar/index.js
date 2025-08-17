import React from "react";
import "./index.scss";

function NavBar() {
  return (
    <nav>
      <div className="logo">MicroMouse</div>
      <a href="#about" className="links">
        <div className="btn-container">About</div>
      </a>
      <a href="#contact" className="links">
        <div className="btn-container">Contact</div>
      </a>
      <a href="#sponsor" className="links">
        <div className="btn-container">Sponsor</div>
      </a>
    </nav>
  );
}

export default NavBar;
