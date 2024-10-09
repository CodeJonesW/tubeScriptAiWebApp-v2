import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  TextField,
  FormGroup,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
const InputForm = ({ onSubmit, loading }) => {
  const theme = useTheme();
  const [goal, setGoal] = useState("");
  const [prompt, setPrompt] = useState("");
  const [timeline, setTimeline] = useState("1 year");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(goal, prompt, timeline);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Box className="input-group">
            <FormControl fullWidth>
              <TextField
                placeholder="Type your goal..."
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="form-input"
                required
              />
            </FormControl>
          </Box>
          <Box className="input-group">
            <FormControl fullWidth>
              <TextField
                placeholder="Areas of focus..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="form-textarea"
                variant="outlined"
                multiline
                rows={3}
              />
            </FormControl>
          </Box>
          <Box className="input-group">
            <FormControl fullWidth>
              <InputLabel id="timeline-select-label">Timeline</InputLabel>
              <Select
                labelId="timeline-select-label"
                className="form-select"
                label="Timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                required
              >
                <MenuItem value="" disabled>
                  Select Timeline...
                </MenuItem>
                <MenuItem value="1 day">1 Day</MenuItem>
                <MenuItem value="1 week">1 Week</MenuItem>
                <MenuItem value="1 month">1 Month</MenuItem>
                <MenuItem value="3 months">3 Months</MenuItem>
                <MenuItem value="6 months">6 Months</MenuItem>
                <MenuItem value="1 year">1 Year</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant={"contained"}
              className="primary-button"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Show me the way"}
            </Button>
          </Box>
        </FormGroup>
      </form>
    </Box>
  );
};

export default InputForm;
