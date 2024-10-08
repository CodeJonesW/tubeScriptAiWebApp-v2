import React, { useState } from "react";
import axios from "axios";
import { validateEmail } from "../utils/account_verify";
import { Box, FormGroup, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post(`/api/register`, {
        email: email,
        password,
      });
      onRegister();
    } catch (err) {
      console.log(err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "300px",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", color: theme.palette.text.primary }}
      >
        Register
      </Typography>
      {error && (
        <Typography variant="body2" color="error" sx={{ marginBottom: "20px" }}>
          {error}
        </Typography>
      )}
      <form onSubmit={handleRegister}>
        <FormGroup>
          <Box className="input-group">
            <TextField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
                  WebkitTextFillColor: theme.palette.text.primary,
                },
              }}
            />
          </Box>
          <Box className="input-group">
            <TextField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
                  WebkitTextFillColor: theme.palette.text.primary,
                },
              }}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default Register;
