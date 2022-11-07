import React from "react";
import "./Welcome.css";
import Logo from "../storyg.png";
import { Link } from "react-router-dom";
import ChartList from "../ChartList";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <div className="wel-title"> Welcome to Social Media Popularity.</div>
        <div className="wel-description">
          Here we share you the world wide famous media popularity with help of
          graph.
        </div>
        <div className="wel-button">
          <Link to={"/ChartList"}>
            <button>Click To See &nbsp;&nbsp;&gt;&gt;</button>
          </Link>
        </div>
      </div>
      <div className="welcome-png">
        <img src={Logo} alt="storyimg" />
      </div>
    </div>
  );
};

export default Welcome;
