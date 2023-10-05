import { Box, Button, Paper } from "@mui/material";
import styled from "styled-components";
import { theme } from "theme";

export const AuthorizationPaper = styled(Paper)(() => ({
  display: "flex",
  height: "50%",
  padding: "30px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
}));
export const AuthorizationBox = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const AuthorizatTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "25px",
}));
export const AuthorizationButton = styled(Button)(() => ({
  padding: "5px 40px",
}));
