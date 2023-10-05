import { Grid } from "@mui/material";
import styled from "styled-components";
import { theme } from "theme";

export const PostDetailsContainer = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  background: theme.palette.primary.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const PostDetailsPostBox = styled(Grid)(() => ({
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  padding: "50px",
}));

export const PostDetailsSliderBox = styled(Grid)(() => ({
  width: "100%",
  height: "50%",
  display: "flex",
  marginBottom: "100px",
}));

export const PostDetailsContentBox = styled(Grid)(() => ({
  width: "100%",
  height: "50%",
  display: "flex",
  margin: "0px 100px",
}));

export const PostDetailsMapBox = styled(Grid)(() => ({
  width: "50%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
