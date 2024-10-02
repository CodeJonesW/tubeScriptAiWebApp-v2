import React, { useState } from "react";
import axios from "axios";
import { Box, Card, Button, List, ListItem } from "@mui/material";
import Results from "./Results";
import "../css/Goals.css";

const GoalsList = ({ goals }) => {
  const [result, setResults] = useState(null);
  const handleShowGoal = async (goalId) => {
    console.log("Goal ID", goalId);
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `/api/goal`,
        {
          goalId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResults(response.data.goal.plan);
    } catch (error) {
      console.error("Error fetching goal:", error);
    }
  };

  return (
    <Box className="goals-list">
      {result ? (
        <Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => setResults(null)} variant="outlined">
              View All Goals
            </Button>
          </Box>
          <Results result={result} />
        </Box>
      ) : (
        <Card style={{ padding: "24px" }}>
          <h2>My Goals</h2>
          <List>
            {goals.length > 0 ? (
              goals.map((goal, index) => (
                <ListItem
                  onClick={() => handleShowGoal(goal.GoalId)}
                  key={index}
                  className="goal-item"
                >
                  {goal.goal_name}
                </ListItem>
              ))
            ) : (
              <p>No goals available</p>
            )}
          </List>
        </Card>
      )}
    </Box>
  );
};

export default GoalsList;
