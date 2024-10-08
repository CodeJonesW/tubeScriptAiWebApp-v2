import React from "react";
import { Box, Card, Button, List, ListItem } from "@mui/material";
import Results from "./Results";
import "../css/Goals.css";
import { useSelector, useDispatch } from "react-redux";
import { getGoal, clearGoal } from "../redux/slices/goalSlice";

const GoalsList = ({ goals }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authSlice);
  const { goal } = useSelector((state) => state.goalSlice);
  const handleShowGoal = async (goalId) => {
    dispatch(getGoal({ token, goalId }));
  };

  const handleClearGoal = () => {
    dispatch(clearGoal());
  };

  return (
    <Box className="goals-list">
      {goal ? (
        <Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleClearGoal} variant="outlined">
              View All Goals
            </Button>
          </Box>
          <Results result={goal.plan} />
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
