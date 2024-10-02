import React, { useState } from "react";
import "../css/HowToUse.css";
import { Button, Box } from "@mui/material";
import Results from "./Results";
import { sample } from "../utils/sample";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const HowToUseCard = ({ displayComponent }) => {
  const [showSample, setShowSample] = useState(false);
  return (
    <>
      {!showSample ? (
        <Box className="how-to-use-card">
          <h2 className="how-to-use-title">How to Use My Goal Creator</h2>
          <Box className="how-to-use-content">
            <p>
              Welcome to My Goal Creator! This app is designed to help you set
              and track your goals using AI insights. Here's how to get started:
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
              My Goal Creator offers a set number of free goal planning
              analyses. Premium features coming soon.
            </p>
            <p>Start achieving your goals with AI assistance today!</p>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outlined" onClick={setShowSample}>
                View a sample!
              </Button>
            </Box>
            <Box
              className="button-group"
              style={{ margin: "24px 24px 24px 24px" }}
            >
              <Button
                variant="contained"
                onClick={() => displayComponent("register")}
                className="primary-button"
              >
                Register
              </Button>
              <Button
                variant="contained"
                onClick={() => displayComponent("login")}
                className="primary-button"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Button variant="outlined" onClick={() => setShowSample(false)}>
            <ArrowBackIosNewIcon />
          </Button>
          <Results result={sample} />
        </Box>
      )}
    </>
  );
};

export default HowToUseCard;
