import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import React, { useState } from "react";
import {
  AuthorizationButton,
  AuthorizationPaper,
  AuthorizationTitle,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "./AuthorizationSlice";

export default function Authorization() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "cbaiel@mail.ru",
    password: "begemot2505",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = async () => {
    try {
      await dispatch(loginAsync(user));
      navigate("/posts");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <AuthorizationPaper elevation={0}>
      <AuthorizationTitle>Авторизация </AuthorizationTitle>
      <TextField
        margin="dense"
        required
        name="email"
        type="email"
        label="Электронная почта"
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
        margin="dense"
        required
        name="password"
        type="password"
        label="Пароль"
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
      <AuthorizationButton
        sx={{
          margin: "10px 0px",
          width: window.innerWidth <= 600 ? "100%" : false,
        }}
        variant="contained"
        onClick={login}
      >
        Login
      </AuthorizationButton>
    </AuthorizationPaper>
  );
}
