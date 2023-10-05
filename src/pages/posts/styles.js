import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { theme } from "theme";

export const PostsPageMainConteiner = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  padding: "100px",
  background: theme.palette.primary.secondary,
}));

export const PostsPageAllPostsBox = styled(Grid)(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: "40px",
}));

export const PostsPagePostBox = styled(Box)(() => ({
  width: "300px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  outline: "2px solid black",
  borderRadius: "25px",
  padding: "15px",
}));

export const PostBoxTitleBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const PostBoxTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "20px",
  fontWeight: "800",
}));

export const PostBoxRatingBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
  border: "1px solid #000",
  borderRadius: "15px",
}));

export const PostBoxButtonBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const PostBoxContentBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  border: "1px solid #000",
  borderRadius: "15px",
}));

export const PostBoxContent = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "16px",
  fontWeight: "800",
}));

export const PostBoxFunctionBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "120px",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
}));

export const PostBoxFunctionButton = styled(Button)(() => ({}));
