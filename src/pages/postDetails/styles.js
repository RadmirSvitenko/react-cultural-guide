import { theme } from "theme";
import { Grid, List, ListItemText, Paper } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";

export const PostDetailsContainer = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  padding: "50px",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const PostDetailsSliderBox = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
}));

export const PostDetailsPaper = styled(Paper)(() => ({
  width: "90%",
  height: "110%",
  minWidth: "500px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "30px",
  color: "black",
  margin: "50px 0px",
  borderRadius: "25px",
  [theme.breakpoints.down("sm")]: {
    width: "280px",
    padding: "20px 5px",
    height: "auto",
    minHeight: "800px",
    minWidth: "300px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
}));

export const PostDetailsTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontWeight: "bold",
  fontSize: "15px",
  textTransform: "uppercase",
  letterSpacing: "2px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const PostDetailsTime = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontWeight: "bold",
  fontSize: "20px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
}));

export const PostDetailsTitleBox = styled(Box)(() => ({
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
}));

export const PostDetailsDescriptionBox = styled(Box)(() => ({
  width: "100%",
  height: "50%",
  display: "flex",
  justifyContent: "space-around",
  outline: "1px solid black",
  borderRadius: "25px",
  padding: "10px",
}));

export const PostDetailsTimeBox = styled(Box)(() => ({
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const PostDetailsFunctionBox = styled(Box)(() => ({
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
}));

export const PostDetailsInfoBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "space-around",
}));

export const PostDetailsInfo = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "16px",
  fontWeight: "700",
}));

export const PostDetailsFunction = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "40px",
  fontWeight: "700",
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
}));

export const PostDetailsDescription = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "25px",
  fontWeight: "700",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
  },
}));

export const PostDetailsListBox = styled(Grid)(() => ({
  width: "100%",
  outline: "2px solid #000",
  background: theme.palette.primary.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
}));

export const ListMemberCustomList = styled(List)(() => ({
  width: "100%",
  background: "#232323",
  [theme.breakpoints.down("lg")]: {
    fontSize: "10px",
    flexDirection: "column",
    flexWrap: "wrap",
  },
}));

export const ListMemberCustomListItemText = styled(ListItemText)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontWeight: "600",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: "10px",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
}));

export const PostCommentsContainer = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  minHeight: "500px",
}));

export const PostCommentsBox = styled(Box)(() => ({
  width: "70%",
  height: "auto",
  minHeight: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "2px solid #000",
  borderRadius: "25px",
}));
