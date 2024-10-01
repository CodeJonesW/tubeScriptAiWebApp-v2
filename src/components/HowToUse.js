import React from "react";
import "../css/HowToUse.css";

const HowToUseCard = ({ displayComponent }) => {
  return (
    <div className="how-to-use-card">
      <h2 className="how-to-use-title">How to Use Achieve.ai</h2>
      <div className="how-to-use-content">
        <p>
          Welcome to Achieve.ai! This app is designed to help you set and track
          your goals using AI insights. Here's how to get started:
        </p>
        <ol>
          <li>
            <strong>Define Your Goal</strong>
          </li>
          <li>
            <strong>:</strong> Add Areas of Focus
          </li>
          <li>
            <strong>:</strong> Select a Timeline
          </li>
          <li>
            <strong>Achieve.ai</strong> will show you the way!
          </li>
        </ol>
        <p>
          Achieve.ai offers a set number of free analyses each month. Check your
          profile to monitor your usage and explore premium options if needed.
        </p>
        <p>Start achieving your goals with AI assistance today!</p>
        <div className="button-group" style={{ margin: "40px 60px 0px 60px" }}>
          <button
            onClick={() => displayComponent("register")}
            className="primary-button"
          >
            Register
          </button>
          <button
            onClick={() => displayComponent("login")}
            className="primary-button"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToUseCard;
