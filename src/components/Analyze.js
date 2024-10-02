import React, { useState } from "react";
import "../css/HowToUse.css";
import InputForm from "./InputForm";
import Results from "./Results";
import axios from "axios";

const Analyze = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (goal, prompt, timeline) => {
    setLoading(true);
    setResult("");

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
        <InputForm loading={loading} onSubmit={handleAnalyze} />
      </div>
      <div className="results-container">
        {result && <Results result={result} />}
      </div>
    </div>
  );
};

export default Analyze;
