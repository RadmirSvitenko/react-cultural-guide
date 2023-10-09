import { Grid, Paper } from "@mui/material";
import styled from "styled-components";

export const EditGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
}));

export const EditPaper = styled(Paper)(() => ({
  padding: "10px",
  gap: "30px",
  overflowY: "auto",
  maxWidth: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
