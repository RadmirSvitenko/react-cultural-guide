import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import React, { useState } from "react";
import {
  AuthorizatTitle,
  AuthorizationBox,
  AuthorizationButton,
  AuthorizationPaper,
} from "./styles";

export default function Authorization() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <AuthorizationBox>
      <AuthorizationPaper elevation={20}>
        <AuthorizatTitle>Login</AuthorizatTitle>
        <TextField
          required
          name="email"
          type="email"
          label="Email"
          value={user.email}
          autoComplete="on"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          name="password"
          type="password"
          label="Password"
          value={user.password}
          autoComplete="on"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <AuthorizationButton variant="contained">Login</AuthorizationButton>
        <Typography sx={{ color: "gray", fontSize: "15px" }}>
          Not a member? <Button variant="text">Sign Up</Button>
        </Typography>
      </AuthorizationPaper>
    </AuthorizationBox>
  );
}
