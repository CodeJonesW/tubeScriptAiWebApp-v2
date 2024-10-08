import React from "react";
import {
  Button,
  Box,
  Grid,
  Typography,
  Paper,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../css/LandingPage.css";
import GoalIllustration from "../assets/images/my_goal_creator_landing_page_img_1.webp";

const LandingPage = ({ displayComponent }) => {
  return (
    <Box className="landing-page">
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
          padding: {
            xs: "50px 20px",
            sm: "80px 40px",
            md: "24px 0",
          },
          minHeight: "100vh",
          textAlign: { xs: "center", md: "left" },
        }}
        id="hero"
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  textAlign: "left",
                }}
              >
                My Goal Creator
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: "30px", fontSize: "18px" }}
              >
                Set and track your goals with AI insights. Get started today!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: "16px" }}
                onClick={() => displayComponent("register")}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => displayComponent("login")}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={GoalIllustration}
                alt="Illustration"
                sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: "80px 0", backgroundColor: "#f5f5f5" }} id="features">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "40px",
              color: "#333",
            }}
          >
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#007bff" }}
                >
                  Define Your Goal
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  Use our AI-powered tools to clearly define the path to your
                  goal.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#007bff" }}
                >
                  Dive into Subtopics
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  Continue the conversation with AI without bloating your
                  current conversation.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#007bff" }}
                >
                  Track Progress (Coming Soon)
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  Stay on top of your progress with real-time tracking and
                  analytics.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{ padding: "80px 0", backgroundColor: "#ececec" }}
        id="testimonials"
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "40px",
              color: "#333",
            }}
          >
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: "20px",
                  backgroundColor: "#ffffff", // Keep cards white for contrast
                  border: "1px solid #e0e0e0", // Light border to define edges
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
                }}
              >
                <Typography variant="body1" sx={{ color: "#555" }}>
                  "I was able to visualize the action steps I needed to take."
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: "italic", color: "#007bff" }}
                >
                  — Austin Candler
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="body1" sx={{ color: "#555" }}>
                  "Loved diving deeper into the sub topics of my plan."
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: "italic", color: "#007bff" }}
                >
                  — Jim Gibbs
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="body1" sx={{ color: "#555" }}>
                  "I was skeptical at first, but this app exceeded my
                  expectations."
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: "italic", color: "#007bff" }}
                >
                  — Laura Townsend
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ padding: "80px 0", backgroundColor: "#f5f5f5" }} id="pricing">
        {" "}
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "40px",
              color: "#333",
            }}
          >
            Pricing Plans
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4} mt={4} mb={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: "30px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "95%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#007bff" }}
                  >
                    Free Plan
                  </Typography>
                  <List sx={{ color: "#555", marginBottom: "20px" }}>
                    <ListItem>
                      <ListItemText primary="- Basic AI Goal Planning and Analysis." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="- Dive into goal subtopics." />
                    </ListItem>
                  </List>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => displayComponent("register")}
                  sx={{
                    marginTop: "20px",
                    padding: "10px 20px",
                  }}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} mt={4} mb={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: "30px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "95%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#007bff" }}
                  >
                    Pro Plan
                  </Typography>
                  <List sx={{ color: "#555", marginBottom: "20px" }}>
                    <ListItem>
                      <ListItemText primary="- Dive multiple levels into subtopics and get detailed insights." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="- Track your progress with advanced analytics." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="- Unlimited requests." />
                    </ListItem>
                  </List>
                </Box>

                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    marginTop: "20px",
                    padding: "10px 20px",
                  }}
                >
                  Coming Soon
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          padding: "80px 0",
          textAlign: "center",
        }}
        id="cta"
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Ready to Achieve Your Goals?
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => displayComponent("register")}
          >
            Get Started for Free
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          padding: "40px 0",
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
        }}
        id="footer"
      >
        <Typography variant="body2">
          © 2024 My Goal Creator. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
