import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const Profile = ({ user, isShowingGoals, showGoals, showGoalCreator }) => {
  const theme = useTheme();
  if (!user) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
      >
        Profile
      </Typography>
      <Box>
        <Typography>{user.email}</Typography>
      </Box>
      {!isShowingGoals ? (
        <Box>
          <span>
            <Button
              style={{ marginTop: "16px", maxWidth: "144px" }}
              onClick={showGoals}
              variant="contained"
            >
              View Goals
            </Button>
          </span>
        </Box>
      ) : (
        <Box>
          <span>
            <Button
              style={{ marginTop: "16px", maxWidth: "144px" }}
              onClick={showGoalCreator}
              variant="contained"
            >
              Create Goal
            </Button>
          </span>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
