import React from "react";
import "./index.scss";
import ComputingClubLogo from "../../Assets/Images/computing-club-logo-white.png";
import RoboticsClubLogo from "../../Assets/Images/robotics-club.jpeg";
import APSLogo from "../../Assets/Images/aps-logo.png";
import SkyAcademyLogo from "../../Assets/Images/skyacademy.PNG";

function About() {
  return (
    <section id="about">
      <div className="text-container">
        <h1>MicroMouse HawkHack 2026</h1>
        <p>
          <span>Date: </span>TBD
        </p>
        <p>
          <span>Time: </span>TBD
        </p>
        <p>
          <span>Location: </span>TBD
        </p>
        <p>
          Join us for Montclair's first ever Micromouse Hackathon, where
          innovation meets competition. Teams will design, construct, and
          program autonomous robotic mice that race against the clock to conquer
          a maze in the fastest time possible. Each run is scored based on both
          speed and accuracy, with penalties applied for mapping time and
          errors, and bonuses awarded for clean, untouchable runs.
          <br />
          <br />
          This year’s contest follows established international standards with
          updated rules to keep the challenge fair and exciting. Competitors are
          given up to 7 minutes to complete a maximum of five runs, with only
          one robot per team permitted. Strategy, precision, and engineering
          skill all play a vital role in determining who will claim victory.
          <br />
          <br />
          🏆 Prizes will be awarded as follows:
          <br />
          <br />
          <span>1st Place:</span> TBD
        </p>
        <p>
          <span>2nd Place:</span> TBD
        </p>
        <p>
          <span>3rd Place:</span> TBD
        </p>
        <p>
          Help us make history! Space is limited to the first x registrants.
        </p>
        <h3>Presented By:</h3>
        <div className="orgs">
          <a
            className="org-logo"
            href="https://ccmsu.org"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              src={ComputingClubLogo}
              alt="Logo for the Computing Club of Montclair State University"
            />
          </a>
          <a
            className="org-logo"
            href="https://www.raiserobot.com/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              src={RoboticsClubLogo}
              alt="Logo for the Computing Club of Montclair State University"
            />
          </a>
          <a
            className="org-logo"
            href="https://www.raiserobot.com/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              src={APSLogo}
              alt="Logo for the Computing Club of Montclair State University"
            />
          </a>
        </div>

        <img src={SkyAcademyLogo} alt="logo for sky academy" id="SkyAcademyLogo"/>
      </div>
    </section>
  );
}

export default About;
