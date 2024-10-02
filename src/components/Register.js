import React, { useState } from "react";
import axios from "axios";
import { validateEmail } from "../utils/account_verify";
import { Box, FormGroup, Button, TextField } from "@mui/material";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
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
    <Box className="form-container">
      <h2 className="form-title">Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleRegister}>
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
            Register
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default Register;
