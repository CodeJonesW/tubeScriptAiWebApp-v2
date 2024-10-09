import React, { useState } from "react";
import { validateEmail } from "../utils/account_verify";
import { Box, Button, TextField, FormGroup, Typography } from "@mui/material";
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";

const Login = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    dispatch(login({ email, password }));
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
        Login
      </Typography>
      {error && (
        <Typography variant="body2" color="error" sx={{ marginBottom: "20px" }}>
          {error}
        </Typography>
      )}
      <form onSubmit={handleLogin}>
        <FormGroup>
          <Box className="input-group">
            <TextField
              type="email"
              variant="outlined"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              color="secondary"
            />
          </Box>
          <Box className="input-group">
            <TextField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              required
              color="secondary"
            />
          </Box>
          <Button
            sx={{ marginTop: "16px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default Login;
