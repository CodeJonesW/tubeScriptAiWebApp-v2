import React from "react";
import DOMPurify from "dompurify";
import MarkdownIt from "markdown-it";

const mdParser = new MarkdownIt();

const Results = ({ result }) => {
  const htmlContent = mdParser.render(result);
  const cleanHtmlContent = DOMPurify.sanitize(htmlContent);

  return (
    <div className="results-card" style={{ textAlign: "left" }}>
      <div
        className="result-content"
        dangerouslySetInnerHTML={{ __html: cleanHtmlContent }}
      />
    </div>
  );
};

export default Results;
