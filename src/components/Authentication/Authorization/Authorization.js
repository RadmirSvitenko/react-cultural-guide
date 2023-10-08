import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import React, { useState } from "react";
import {
  AuthorizationBox,
  AuthorizationButton,
  AuthorizationPaper,
  AuthorizationTitle,
  LinkText,
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
  const handleNavigateToRegistration = () => {
    navigate("/registration-user");
  };
  const login = async () => {
    try {
      await dispatch(loginAsync(user));
      navigate("/");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <AuthorizationBox>
      <AuthorizationPaper elevation={20}>
        <AuthorizationTitle>Авторизация </AuthorizationTitle>
        <TextField
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
        <AuthorizationButton variant="contained" onClick={login}>
          Login
        </AuthorizationButton>
        <Box>
          <Typography sx={{ color: "gray", fontSize: "15px" }}>
            Не зарегестрированы?
          </Typography>
          <LinkText onClick={handleNavigateToRegistration}>
            Регистрация
          </LinkText>
        </Box>
      </AuthorizationPaper>
    </AuthorizationBox>
  );
}
