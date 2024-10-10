import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import Results from "./Results";
import { getProfile } from "../redux/slices/profileSlice";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";

const Analyze = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authSlice);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [buffer, setBuffer] = useState("");
  const [refreshProfile, setRefreshProfile] = useState(false);

  useEffect(() => {
    if (refreshProfile) {
      dispatch(getProfile(token));
      setRefreshProfile(false);
    }
  }, [refreshProfile, token, dispatch]);

  const handleAnalyze = (goal, prompt = "", timeline = "1 year") => {
    setLoading(true);
    setResult("");
    setBuffer("");

    try {
      const token = localStorage.getItem("authToken");
      const eventSource = new EventSource(
        `/api/analyze?goal=${encodeURIComponent(
          goal
        )}&prompt=${encodeURIComponent(prompt)}&timeline=${encodeURIComponent(
          timeline
        )}&token=${encodeURIComponent(token)}`
      );

      eventSource.onmessage = (event) => {
        let newChunk = event.data;
        if (newChunk === "event: done") return;

        setBuffer((prevBuffer) => {
          let updatedBuffer = prevBuffer + (newChunk === "" ? "\n" : newChunk);
          const lines = updatedBuffer.split("\n");

          let completeContent = "";
          let remainingBuffer = "";

          lines.forEach((line, index) => {
            if (/^\s*#{1,6}\s/.test(line) || /^\s*[-*]\s/.test(line)) {
              if (index === lines.length - 1) {
                remainingBuffer = line;
              } else {
                completeContent += line + "\n";
              }
            } else {
              if (index === lines.length - 1) {
                remainingBuffer = line;
              } else {
                completeContent += line + "\n";
              }
            }
          });

          setResult((prevResult) => prevResult + completeContent);
          return remainingBuffer || "";
        });
      };

      eventSource.onerror = (error) => {
        console.error("Error during analysis:", error);
        eventSource.close();
        setBuffer((prevBuffer) => {
          if (prevBuffer) {
            setResult((prevResult) => prevResult + prevBuffer);
          }
          return "";
        });
        setLoading(false);
        setRefreshProfile(true);
      };
    } catch (error) {
      setLoading(false);
      console.error("Error during analysis:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "90%",
        }}
      >
        <Box
          sx={{
            height: "95%",
            width: "90%",
            borderRadius: "20px",
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          {/* Render results */}
          <Results result={result} />
        </Box>
      </Box>
      <Box sx={{ height: "5%", width: "100%" }}></Box>

      {/* Input form */}
      <Box
        sx={{
          width: "100%",
          borderRadius: "20px",
          boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)", // Shadow to distinguish form
          position: "sticky",
          bottom: 0, // Stick to the bottom
        }}
      >
        <InputForm loading={loading} onSubmit={handleAnalyze} />
      </Box>
    </Box>
  );
};

export default Analyze;
