import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact: </h1>
      <p>
        You can direct any questions to the{" "}
        <a href="mailto:roboticsclub@sgamsu.org?subject=Question about the MicroMouse Hackathon">
          {" "}
          Robotics Club email{" "}
        </a>{" "}
        or the
        <a href="mailto:computingclub@sgamsu.org?subject=Question about the MicroMouse Hackathon">
          {" "}
          Computing Club email
        </a>
      </p>
      <div>
        <a href="https://discord.gg/uZG9Z694PV">
          <FontAwesomeIcon
                    
            icon={faDiscord}
            color="#d1190d"
            fontSize={"3rem"}
            id="discord"
          />
        </a>
        <h3>Join our discord to stay up to date!</h3>
      </div>
    </section>
  );
}

export default Contact;
