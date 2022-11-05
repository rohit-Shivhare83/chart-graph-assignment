import React from "react";
import "./Welcome.css";
// import Logo from "./story.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <div className="wel-title">Welcome to Social Media Popularity</div>
        <div className="wel-description">
          <p>
            Here we share you the world wide famous media popularity with help
            of graph.
          </p>
        </div>
        <div className="wel-button">
          <button>
            <a href="#">Click To See</a>
          </button>
        </div>
      </div>
      <div className="welcome-png">
        {/* <img src={Logo} alt="storyimg" /> */}
      </div>
    </div>
  );
};

export default Welcome;
