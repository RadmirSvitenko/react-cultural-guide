import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  AuthorizationBox,
  AuthorizationTitle,
} from "../../Authorization/styles";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import FindInPageTwoToneIcon from "@mui/icons-material/FindInPageTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import { RegistrationCompanyPaper } from "./styles";
import { companyRegisterAsync } from "../registrationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function RegistrationCompany() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [company, setCompany] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    doc: "",
  });
  console.log("company: ", company);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompany((prevCompanyData) => ({
      ...prevCompanyData,
      [name]: value,
    }));

    if (name === "confirm_password" && value === "") {
      setPasswordError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !company.username ||
      !company.email ||
      !company.password ||
      !company.confirm_password ||
      !company.phone_number ||
      !company.doc
    ) {
      alert("Все поля должны быть заполнены");
      return;
    }

    if (company.password !== company.confirm_password) {
      console.log("Пароли не совпадают");
      setPasswordError(true);
      return;
    }

    try {
      await dispatch(
        companyRegisterAsync({
          username: company.username,
          email: company.email,
          password: company.password,
          confirm_password: company.confirm_password,
          phone_number: company.phone_number,
          doc: company.doc,
        })
      );

      navigate("/");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <AuthorizationBox>
      <RegistrationCompanyPaper elevation={20}>
        <AuthorizationTitle>Регистрация Компании</AuthorizationTitle>
        <TextField
          required
          name="username"
          placeholder="Название Компании"
          value={company.username}
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
          name="doc"
          placeholder="Doc"
          value={company.doc}
          autoComplete="on"
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FindInPageTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          name="phone_number"
          placeholder="Номер Компании"
          value={company.phone_number}
          autoComplete="on"
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LocalPhoneTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          name="email"
          type="email"
          placeholder="Элеткронная почта"
          value={company.email}
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
          value={company.password}
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
          value={company.confirm_password}
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
      </RegistrationCompanyPaper>
    </AuthorizationBox>
  );
}
