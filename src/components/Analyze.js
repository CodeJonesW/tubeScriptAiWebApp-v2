import React, { useState } from "react";
import "../css/HowToUse.css";
import InputForm from "./InputForm";
import Results from "./Results";
import axios from "axios";

const Analyze = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [buffer, setBuffer] = useState(""); // Buffer to store partial chunks

  const handleAnalyze = (goal, prompt, timeline) => {
    setLoading(true);
    setResult("");
    setBuffer(""); // Clear the buffer for new analysis

    try {
      const token = localStorage.getItem("authToken");

      // Open EventSource connection with query parameters
      const eventSource = new EventSource(
        `/api/analyze?goal=${encodeURIComponent(
          goal
        )}&prompt=${encodeURIComponent(prompt)}&timeline=${encodeURIComponent(
          timeline
        )}&token=${encodeURIComponent(token)}`
      );

      // Listen for streaming results
      eventSource.onmessage = (event) => {
        let newChunk = event.data;
        console.log("Received chunk in UI:", newChunk);

        // Append the new chunk to the buffer
        setBuffer((prevBuffer) => {
          const updatedBuffer = prevBuffer + newChunk;

          // Check if the updated buffer has any complete markdown elements
          const completeChunks = updatedBuffer.split("\n\n"); // Split by double newlines (or another method to detect boundaries)

          // Remove the last incomplete chunk from completeChunks and keep it in the buffer
          const incompleteChunk = completeChunks.pop();

          // Process the complete chunks (render them as markdown)
          setResult((prevResult) => prevResult + completeChunks.join("\n\n"));

          // Return the new buffer with the incomplete chunk
          return incompleteChunk || "";
        });
      };

      // Handle stream closing or errors
      eventSource.onerror = (error) => {
        console.error("Error during analysis:", error);
        eventSource.close();
        setLoading(false); // Stop loading when stream is done or errored
      };

      eventSource.onopen = () => {
        console.log("SSE connection opened.");
      };
    } catch (error) {
      setLoading(false);
      console.error("Error during analysis:", error);
    }
  };

  // const handleAnalyze = (goal, prompt, timeline) => {
  //   setLoading(true);
  //   setResult("");

  //   try {
  //     const token = localStorage.getItem("authToken");

  //     // Open EventSource connection with query parameters
  //     const eventSource = new EventSource(
  //       `/api/analyze?goal=${encodeURIComponent(
  //         goal
  //       )}&prompt=${encodeURIComponent(prompt)}&timeline=${encodeURIComponent(
  //         timeline
  //       )}&token=${encodeURIComponent(token)}`
  //     );

  //     // Listen for streaming results
  //     eventSource.onmessage = (event) => {
  //       console.log("Received chunk in UI:", event.data);
  //       setResult((prevResult) => prevResult + event.data); // Append incoming data
  //     };

  //     // Handle stream closing or errors
  //     eventSource.onerror = (error) => {
  //       console.error("Error during analysis:", error);
  //       eventSource.close();
  //       setLoading(false); // Stop loading when stream is done or errored
  //     };

  //     eventSource.onopen = () => {
  //       console.log("SSE connection opened.");
  //     };
  //   } catch (error) {
  //     setLoading(false);
  //     console.error("Error during analysis:", error);
  //   }
  // };

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
