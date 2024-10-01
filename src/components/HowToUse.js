import React from "react";
import "../css/HowToUse.css";

const HowToUseCard = ({ displayComponent }) => {
  return (
    <div className="how-to-use-card">
      <h2 className="how-to-use-title">How to Use My Goal Creator</h2>
      <div className="how-to-use-content">
        <p>
          Welcome to My Goal Creator! This app is designed to help you set and
          track your goals using AI insights. Here's how to get started:
        </p>
        <ol>
          <li>
            <strong>Define Your Goal</strong>
          </li>
          <li>
            <strong>Add Areas of Focus</strong>
          </li>
          <li>
            <strong>Select a Timeline</strong>
          </li>
          <li>
            <strong>My Goal Creator will show you the way!</strong>
          </li>
        </ol>
        <p>
          My Goal Creator offers a set number of free analyses. Premium features
          coming soon.
        </p>
        <p>Start achieving your goals with AI assistance today!</p>
        <div className="button-group" style={{ margin: "24px 24px 24px 24px" }}>
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
