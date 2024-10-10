import React, { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import MarkdownIt from "markdown-it";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const mdParser = new MarkdownIt();

const Results = ({ result }) => {
  const theme = useTheme();
  const htmlContent = mdParser.render(result);
  const cleanHtmlContent = DOMPurify.sanitize(htmlContent);

  const resultsRef = useRef(null);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true); // Track auto-scroll state

  // Handle user scroll
  const handleScroll = () => {
    if (resultsRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = resultsRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // Consider it "at the bottom" if within 10px
      setIsAutoScrollEnabled(isAtBottom); // Enable auto-scroll only if the user is at the bottom
    }
  };

  // Attach scroll listener to disable auto-scroll on user interaction
  useEffect(() => {
    const resultsElement = resultsRef.current;
    if (resultsElement) {
      resultsElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (resultsElement) {
        resultsElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (resultsRef.current && isAutoScrollEnabled) {
      resultsRef.current.scrollTop = resultsRef.current.scrollHeight;
    }
  }, [result, isAutoScrollEnabled]);

  return (
    <Box
      ref={resultsRef}
      sx={{
        textAlign: "left",
        color: theme.palette.text.primary,
        padding: "16px",
        borderRadius: 1,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        height: "80%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: cleanHtmlContent }} />
    </Box>
  );
};

export default Results;
