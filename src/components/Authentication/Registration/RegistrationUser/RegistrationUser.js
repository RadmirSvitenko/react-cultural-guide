import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import {
  AuthorizationBox,
  AuthorizationTitle,
  LinkText,
} from "../../Authorization/styles";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerSelectors, userRegisterAsync } from "../registrationSlice";
import { LoadingButton } from "@mui/lab";
import { RegistrationPaper } from "./styles";

const RegistrationUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRegisterLoading = useSelector(
    registerSelectors.isUserRegisterLoading
  );

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
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

    if (name === "confirm_password" && value === "") {
      setPasswordError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка на заполнение всех обязательных полей
    if (
      !user.username ||
      !user.email ||
      !user.password ||
      !user.confirm_password
    ) {
      console.log("Все поля должны быть заполнены");
      return;
    }

    if (user.password !== user.confirm_password) {
      console.log("Пароли не совпадают");
      setPasswordError(true);
      return;
    }

    try {
      await dispatch(
        userRegisterAsync({
          user: {
            username: user.username,
            email: user.email,
            password: user.password,
            confirm_password: user.confirm_password,
          },
        })
      );

      navigate("/");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleNavigateToCompanyRegistration = () => {
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
          name="password"
          value={user.password}
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
          name="confirm_password"
          className={passwordError ? "error" : ""}
          value={user.confirm_password}
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

        <LoadingButton
          variant="contained"
          loading={isRegisterLoading}
          onClick={handleSubmit}
        >
          Registration
        </LoadingButton>

        <LinkText onClick={handleNavigateToCompanyRegistration}>
          Вы компания?
        </LinkText>
      </RegistrationPaper>
    </AuthorizationBox>
  );
};

export default RegistrationUser;
