import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Houseplant Store</h1>
      <p>Your one-stop shop for the best houseplants.</p>
      <Link to="/products">
        <button className="start-button">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
