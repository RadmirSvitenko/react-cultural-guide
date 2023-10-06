import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { AuthorizationBox, AuthorizationTitle } from "../Authorization/styles";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import FindInPageTwoToneIcon from "@mui/icons-material/FindInPageTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import { RegistrationCompanyPaper } from "./styles";
export default function RegistrationCompany() {
  const [company, setCompany] = useState({
    companyName: "",
    companyEmail: "",
    companyPassword1: "",
    companyPassword2: "",
    companyDoc: "",
    companyPhone_number: "",
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

    if (name === "companyPassword2" && value === "") {
      setPasswordError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (company.companyPassword1 !== company.companyPassword2) {
      console.log("Пароли не совпадают!");
      setPasswordError(true);
      return;
    }
  };

  return (
    <AuthorizationBox>
      <RegistrationCompanyPaper elevation={20}>
        <AuthorizationTitle>Регистрация Компании</AuthorizationTitle>
        <TextField
          required
          name="companyName"
          placeholder="Название Компании"
          value={company.companyName}
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
          name="companyDoc"
          placeholder="Doc"
          value={company.companyDoc}
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
          name="companyPhone_number"
          placeholder="Номер Компании"
          value={company.companyPhone_number}
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
          name="companyEmail"
          type="email"
          placeholder="Элеткронная почта"
          value={company.companyEmail}
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
          name="companyPassword1"
          value={company.companyPassword1}
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
          name="companyPassword2"
          className={passwordError ? "error" : ""}
          value={company.companyPassword2}
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
