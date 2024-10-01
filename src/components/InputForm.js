import React, { useState } from "react";

const InputForm = ({ onSubmit, loading }) => {
  const [goal, setGoal] = useState("");
  const [prompt, setPrompt] = useState("");
  const [timeline, setTimeline] = useState("1 year");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(goal, prompt, timeline);
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Type your goal..."
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="input-group">
          <textarea
            placeholder="Areas of focus..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="form-textarea"
          />
        </div>
        <div className="input-group">
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="form-select"
            required
          >
            <option value="" disabled>
              Select Timeline...
            </option>
            <option value="1 day">1 Day</option>
            <option value="1 week">1 Week</option>
            <option value="1 month">1 Month</option>
            <option value="3 months">3 Months</option>
            <option value="6 months">6 Months</option>
            <option value="1 year">1 Year</option>
          </select>
        </div>

        <button type="submit" className="primary-button" disabled={loading}>
          Show me the way
        </button>
      </form>
    </div>
  );
};

export default InputForm;
