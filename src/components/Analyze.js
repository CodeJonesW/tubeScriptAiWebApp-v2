import React, { useState } from "react";
import "../css/HowToUse.css"; // Import the CSS for this component
import InputForm from "./InputForm";
import Results from "./Results";
import axios from "axios";

const Analyze = () => {
  const [result, setResult] = useState("");
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async (goal, prompt, timeline) => {
    setLoading(true);
    setResult("");
    setStatus("");
    setTranscript("");

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `/api/analyze`,
        {
          goal,
          prompt,
          timeline,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResult(response.data.plan);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error during analysis:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <InputForm
          loading={loading}
          onSubmit={handleAnalyze}
          error={error}
          status={status}
        />
      </div>
      <div className="results-container">
        {result && <Results result={result} />}
      </div>
    </div>
  );
};

export default Analyze;
