import React from "react";
import "./index.scss";
import video from "../../Assets/micromouse-background.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-msg">
        <h2>IEEE Montclair presents...</h2>
        <h1>MicroMouse HawkHack 2025</h1>
        <p>A competition where algorithms meet real-world problem solving</p>
        <a
          href="https://google.com"
          className="registration-btn"
          target="_blank"
          rel="nooperner noreferrer"
        >
          Register Now!
        </a>
      </div>
      <div class="video-background">
        <video src={video} autoPlay muted loop playsInline />
      </div>
      <a href="#about" className="arrow-down">
        <FontAwesomeIcon icon={faArrowCircleDown} bounce color="white" />
      </a>
    </div>
  );
}

export default Welcome;
