import React, { useState } from "react";
import axios from "axios";
import { validateEmail } from "../utils/account_verify";
import { Box, Button, TextField, FormGroup } from "@mui/material";
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    console.log("email", email, "password", password);
    dispatch(login({ email, password }));
  };

  return (
    <Box className="form-container">
      <h2 className="form-title">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <FormGroup>
          <Box className="input-group">
            <TextField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </Box>
          <Box className="input-group">
            <TextField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </Box>
          <Button type="submit" variant="contained" className="primary-button">
            Login
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default Login;
