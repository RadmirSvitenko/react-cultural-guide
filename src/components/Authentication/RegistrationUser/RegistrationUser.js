import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  AuthorizationBox,
  AuthorizationTitle,
  LinkText,
} from "../Authorization/styles";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { useNavigate } from "react-router-dom";
import { RegistrationPaper } from "./styles";
export default function RegistrationUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  console.log("user: ", user);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    if (name === "password2" && value === "") {
      setPasswordError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password1 !== user.password2) {
      console.log("Пароли не совпадают!");
      setPasswordError(true);
      return;
    }
  };
  const handleNavigateToCompanyRegisrtation = () => {
    navigate("/registration-company");
  };
  return (
    <AuthorizationBox>
      <RegistrationPaper elevation={20}>
        <AuthorizationTitle>Регистрация</AuthorizationTitle>
        <TextField
          required
          name="username"
          placeholder="Ник"
          value={user.username}
          autoComplete="on"
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PermIdentityTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          name="email"
          type="email"
          placeholder="Элеткронная почта"
          value={user.email}
          autoComplete="on"
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="Пароль"
          type={showPassword ? "text" : "password"}
          name="password1"
          value={user.password1}
          onChange={handleInputChange}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityTwoToneIcon />
                  ) : (
                    <VisibilityOffTwoToneIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          error={passwordError}
          onChange={handleInputChange}
          placeholder="Повторите пароль"
          name="password2"
          className={passwordError ? "error" : ""}
          value={user.password2}
          type={showConfirmPassword ? "text" : "password"}
          helperText={passwordError && "Пароли не совпадают"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <VisibilityTwoToneIcon />
                  ) : (
                    <VisibilityOffTwoToneIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={handleSubmit} variant="contained">
          Зарегестрироваться
        </Button>
        <LinkText onClick={handleNavigateToCompanyRegisrtation}>
          Вы компания?
        </LinkText>
      </RegistrationPaper>
    </AuthorizationBox>
  );
}
