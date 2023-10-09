import styled from "styled-components";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";

export const ProfileBox = styled(Box)(() => ({
  height: "110vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const ProfilePaper = styled(Paper)(() => ({
  padding: "10px",
  gap: "30px",
  minWidth: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const ProfileDisplayBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  maxWidth: "100%",
}));

export const ProfileTypography = styled(Typography)(() => ({
  fontWeight: "bold",
}));
