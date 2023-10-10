import { Grid, Paper } from "@mui/material";
import styled from "styled-components";
import { theme } from "theme";

export const EditGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
}));

export const EditPaper = styled(Paper)(() => ({
  padding: "10px",
  gap: "30px",
  maxWidth: "350px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "70%",

  [theme.breakpoints.down("lg")]: {
    height: "600px",
    maxWidth: "300px",
  },
}));
