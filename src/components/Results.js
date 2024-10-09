import React from "react";
import DOMPurify from "dompurify";
import MarkdownIt from "markdown-it";
import { useTheme } from "@mui/material/styles";

const mdParser = new MarkdownIt();

const Results = ({ result }) => {
  const theme = useTheme();
  const htmlContent = mdParser.render(result);
  const cleanHtmlContent = DOMPurify.sanitize(htmlContent);

  return (
    <div
      style={{
        textAlign: "left",
        backgroundColor: theme.palette.secondary.main,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "80%",
        margin: "20px auto",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: cleanHtmlContent }} />
    </div>
  );
};

export default Results;
