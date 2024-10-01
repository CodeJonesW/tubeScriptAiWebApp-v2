import React, { useState } from "react";
import axios from "axios";
import "../css/Goals.css";

const GoalsList = ({ goals }) => {
  const [goalToShow, setGoalToShow] = useState(null);
  const handleShowGoal = async (goalId) => {
    console.log("Goal ID", goalId);
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(`/api/goals/${goalId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Goal response", response.data);
      setGoalToShow(response.data);
    } catch (error) {
      console.error("Error fetching goal:", error);
    }
  };

  return (
    <div className="goals-list">
      <h2>My Goals - Coming Soon</h2>
      <ul>
        {goals.length > 0 ? (
          goals.map((goal, index) => (
            <li
              onClick={() => handleShowGoal(goal.GoalId)}
              key={index}
              className="goal-item"
            >
              {goal.goal_name}
            </li>
          ))
        ) : (
          <p>No goals available</p>
        )}
      </ul>
      {goalToShow && (
        <div className="goal-details">
          <h2>{goalToShow.goal_name}</h2>
          <p>{goalToShow.prompt}</p>
          <p>{goalToShow.timeline}</p>
        </div>
      )}
    </div>
  );
};

export default GoalsList;
