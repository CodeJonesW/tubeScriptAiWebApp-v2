import React, { useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import MarkdownIt from "markdown-it";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const mdParser = new MarkdownIt();

const Results = ({ result }) => {
  const theme = useTheme();
  const htmlContent = mdParser.render(result);
  const cleanHtmlContent = DOMPurify.sanitize(htmlContent);

  // Create a ref to track the scroll container
  const resultsRef = useRef(null);

  // Scroll to the bottom when new content is added
  useEffect(() => {
    if (resultsRef.current) {
      resultsRef.current.scrollTop = resultsRef.current.scrollHeight;
    }
  }, [result]); // Run this effect whenever `result` changes

  return (
    <Box
      ref={resultsRef} // Attach the ref to the results container
      sx={{
        textAlign: "left",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: "16px",
        borderRadius: 1,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Slight shadow
        width: "100%",
        height: "100%", // Ensure the box fills available height
        overflowY: "auto", // Enable scrolling within this box
        overflowX: "hidden", // Hide horizontal scrollbar
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: cleanHtmlContent }} />
    </Box>
  );
};

export default Results;
