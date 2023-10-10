import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { theme } from "theme";

export const LoadingContainer = styled(Grid)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.primary.secondary,
}));
