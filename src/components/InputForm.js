import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, FormControl, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const InputForm = ({ onSubmit, loading }) => {
  const theme = useTheme();
  const [goal, setGoal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(goal);
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <FormControl sx={{ flex: 9.5 }}>
            <TextField
              placeholder="Type your goal..."
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              InputProps={{
                style: {
                  backgroundColor: theme.palette.background.paper,
                },
              }}
              sx={{
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
                  WebkitTextFillColor: theme.palette.text.primary,
                  borderRadius: "8px",
                },
              }}
            />
          </FormControl>
          <Box sx={{ flex: 0.5, paddingLeft: "8px", height: "100%" }}>
            <Button
              type="submit"
              color="secondary"
              variant={"contained"}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                <CheckCircleOutlinedIcon />
              )}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default InputForm;
