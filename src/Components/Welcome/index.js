import React from "react";
import "./index.scss";
import video from "../../Assets/micromouse-background.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

function Welcome() {
  return (
    <section className="welcome-container" id="home">
      <div className="welcome-msg">
        <h2>IEEE Montclair presents...</h2>
        <h1>MicroMouse HawkHack 2026</h1>
        <p>A competition where algorithms meet real-world problem solving</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScVYWLyfLbmftAKwKQtKJ1kPWdG1rw9EM3_7uZZrm6KKci1Fw/viewform?usp=header"
          className="registration-btn"
          target="_blank"
          rel="nooperner noreferrer"
        >
          Click Here to Register Interest!
        </a>
      </div>
      <div class="video-background">
        <video src={video} autoPlay muted loop playsInline />
      </div>
      <a href="#about" className="arrow-down">
        <FontAwesomeIcon icon={faArrowCircleDown} bounce color="white" />
      </a>
    </section>
  );
}

export default Welcome;
