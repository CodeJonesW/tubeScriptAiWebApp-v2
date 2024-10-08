import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box } from "@mui/material";
import "./App.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Profile,
  HowToUse,
  Register,
  Login,
  Analyze,
  Goals,
} from "./components/index.js";
import { getProfile } from "./redux/slices/profileSlice";
import { clearAuthToken, getAuthToken } from "./redux/slices/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authSlice);
  const { user, goals } = useSelector((state) => state.profileSlice);

  const [showGoals, setShowGoals] = useState(false);
  const [displayComponent, setDisplayComponent] = useState("welcome");

  useEffect(() => {
    if (token) {
      try {
        dispatch(getProfile(token));
        setDisplayComponent("analyze");
      } catch (error) {
        console.error("Error fetching profile:", error);
        dispatch(clearAuthToken());
      }
    }
  }, [token, dispatch]);

  useEffect(() => {
    dispatch(getAuthToken());
  }, [dispatch]);

  const handleShowGoals = () => {
    setShowGoals(true);
  };

  const handleShowGoalCreator = () => {
    setShowGoals(false);
  };

  const handleLogout = () => {
    dispatch(clearAuthToken());
    setDisplayComponent("welcome");
  };

  const BackButton = () => {
    return (
      <Box style={{ width: "100%", marginBottom: "44px" }}>
        <Button
          variant="outlined"
          onClick={() => setDisplayComponent("welcome")}
          style={{
            width: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="secondary-button"
        >
          <ArrowBackIosNewIcon />
        </Button>
      </Box>
    );
  };

  return (
    <>
      {!token ? (
        <Box className="onboarding-container">
          {displayComponent === "welcome" ? (
            <Box>
              <h2>My Goal Creator</h2>
              <HowToUse displayComponent={setDisplayComponent} />
            </Box>
          ) : null}
          {displayComponent === "register" ? (
            <>
              <BackButton />
              <h2>My Goal Creator</h2>
              <Register
                back={() => setDisplayComponent("welcome")}
                onRegister={() => {
                  alert("Registered successfully! Please log in.");
                  setDisplayComponent("login");
                }}
              />
            </>
          ) : null}
          {displayComponent === "login" ? (
            <>
              <BackButton />
              <h2>My Goal Creator</h2>
              <Login back={() => setDisplayComponent("welcome")} />
            </>
          ) : null}
        </Box>
      ) : (
        <Box className="app-container">
          <Box style={{ width: "100%" }}>
            <Box className="nav-container">
              <h2>My Goal Creator</h2>
              <Box className="logout-container">
                <Button
                  variant="outlined"
                  className="logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Box>
            </Box>
            <Box className="profile-container">
              <Profile
                user={user}
                showGoals={handleShowGoals}
                showGoalCreator={handleShowGoalCreator}
                isShowingGoals={showGoals}
              />
            </Box>
          </Box>
          {!showGoals ? <Analyze /> : <Goals goals={goals} />}
        </Box>
      )}
    </>
  );
};

export default App;
