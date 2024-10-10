import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box } from "@mui/material";
import "./App.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  LandingPage,
  Register,
  Login,
  Analyze,
  Goals,
  NavBar,
} from "./components/index.js";
import { getProfile } from "./redux/slices/profileSlice";
import { clearAuthToken, getAuthToken } from "./redux/slices/authSlice";
import { useTheme } from "@mui/material/styles";

const App = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authSlice);
  const { goals } = useSelector((state) => state.profileSlice);
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
          variant="contained"
          color="secondary"
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
    <Box sx={{ width: "100%", height: "100%" }}>
      {!token ? (
        <Box>
          {displayComponent === "welcome" ? (
            <Box>
              <LandingPage displayComponent={setDisplayComponent} />
            </Box>
          ) : null}

          {displayComponent === "register" ? (
            <Box
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                height: "100vh",
                width: "100vw",
                padding: "20px",
              }}
            >
              <BackButton />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Register
                  back={() => setDisplayComponent("welcome")}
                  onRegister={() => {
                    alert("Registered successfully! Please log in.");
                    setDisplayComponent("login");
                  }}
                />
              </Box>
            </Box>
          ) : null}

          {displayComponent === "login" ? (
            <Box
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                height: "100vh",
                width: "100vw",
                padding: "20px",
              }}
            >
              <BackButton />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Login back={() => setDisplayComponent("welcome")} />
              </Box>
            </Box>
          ) : null}
        </Box>
      ) : (
        <Box
          className="main"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            background: theme.palette.primary.main,
          }}
        >
          <Box style={{ width: "100%", height: "10%" }}>
            <NavBar
              showGoals={handleShowGoals}
              showGoalCreator={handleShowGoalCreator}
              isShowingGoals={showGoals}
              handleLogout={handleLogout}
            />
          </Box>
          <Box sx={{ height: "95%", width: "100%" }}>
            {!showGoals ? <Analyze /> : <Goals goals={goals} />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default App;
