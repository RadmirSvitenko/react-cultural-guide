import { Box, Button, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "theme";

export const AuthorizationBox = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const AuthorizationPaper = styled(Paper)(() => ({
  display: "flex",
  height: "50%",
  padding: "30px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
}));
export const AuthorizationForm = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "25px",
}));

export const AuthorizationTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "25px",
}));
export const AuthorizationButton = styled(Button)(() => ({
  padding: "5px 40px",
}));

export const LinkText = styled(Typography)(() => ({
  color: "blue",
  fontSize: "10px",
  "&:hover": {
    cursor: "pointer",
  },
}));
