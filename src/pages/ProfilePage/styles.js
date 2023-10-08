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
  width: "25%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "30px",
}));

export const ProfileDisplayBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const ProfileTypography = styled(Typography)(() => ({
  fontWeight: "bold",
}));
