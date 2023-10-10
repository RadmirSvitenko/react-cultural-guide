import { Button, Grid, List, ListItem, Paper } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { theme } from "theme";

export const PostsPageMainConteiner = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  padding: "100px",
  background: theme.palette.primary.secondary,
}));

export const PostsPageFilterContainer = styled(Box)(() => ({
  width: "100px",
  transition: "0.5s",
  height: "100vh",
  position: "fixed",
  zIndex: 800,
  left: 0,
  top: 0,
  bottom: 0,
  justifyContent: "space-evenly",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  padding: "20px",
  background: "#202020",
  ":hover": {
    width: "400px",
    background: "#fff",
    transition: "0.5s",
  },
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
  width: "330px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  outline: "3px solid #ef6c00",
  borderRadius: "25px",
  padding: "15px",
  background: "#101010",
  [theme.breakpoints.down("sm")]: {
    height: "700px",
    paddingBottom: "50px",
  },
}));

export const PostBoxTitleBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const PostBoxTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
}));

export const PostBoxRatingBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
  outline: "1px solid #ef6c00",
  borderRadius: "15px",
}));

export const PostBoxRatingTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#fff",
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
  minHeight: "300px",
  height: "auto",
  outline: "1px solid #ef6c00",
  borderRadius: "15px",
  margin: "50px 0px",
  [theme.breakpoints.down("sm")]: {
    margin: "100px 0px",
  },
}));

export const PostBoxContent = styled(List)(() => ({
  fontFamily: theme.fonts.Nunito,
  minWidth: "200px",
  minHeight: "200px",
  fontSize: "16px",
  fontWeight: "800",
  color: "#fff",
}));

export const PostBoxFunctionBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "120px",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
}));

export const PostCollapseFunctionButton = styled(Button)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "18px",
  fontWeight: "800",
}));

export const PostCollapseContainer = styled(Grid)(() => ({
  display: "flex",
  width: "100%",
  height: "auto",
  minHeight: "100px",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
  zIndex: "100",
  padding: "20px 0px",
  marginBottom: "30px",
}));

export const PostCollapseContentBox = styled(Grid)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  flexDirection: "column",
}));

export const PostCollapseTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "18px",
  fontWeight: "800",
  color: "#fff",
}));

export const TelegramBox = styled(Box)(() => ({
  background: "blue",
  borderRadius: "50%",
  margin: "30px",
  position: "fixed",
  bottom: "0",
  right: "0",
}));
