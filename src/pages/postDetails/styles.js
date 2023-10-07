import { theme } from "theme";
import { Grid, List, ListItemText } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";

export const PostDetailsContainer = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  background: theme.palette.primary.secondary,
  padding: "50px",
}));

export const PostDetailsSliderBox = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
}));

export const PostDetailsMapBox = styled(Grid)(() => ({
  width: "50%",
  display: "flex",
  alignItems: "center",
  height: "auto",
  outline: "2px solid #000",
}));

export const PostDetailsMap = styled(Grid)(() => ({
  width: "500px",
  maxWidth: "500px",
  height: "500px",
  display: "flex",
  margin: "50px 0px",
  outline: "2px solid #000",
  borderRadius: "25px",
  background: `url("https://willfaulkner.com/wp-content/uploads/2020/09/The-best-photography-locations-in-the-world-featured-image.jpg")`,
}));

export const PostDetailsBox = styled(Grid)(() => ({
  width: "500px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
  margin: "50px 0px",
  outline: "3px solid #ef6c00",
  borderRadius: "25px",
  background: "#101010",
}));

export const PostDetailsTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontWeight: "bold",
  fontSize: "24px",
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "2px",
}));

export const PostDetailsTime = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontWeight: "bold",
  fontSize: "20px",
  color: "#fff",
}));

export const PostDetailsTitleBox = styled(Box)(() => ({
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const PostDetailsDescriptionBox = styled(Box)(() => ({
  width: "100%",
  height: "50%",
  display: "flex",
  justifyContent: "space-around",
  outline: "3px solid #ef6c00",
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
}));

export const PostDetailsInfoBox = styled(Box)(() => ({
  width: "100%",
  height: "10%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const PostDetailsInfo = styled(Box)(() => ({
  color: theme.palette.primary.base,
  fontFamily: theme.fonts.Nunito,
  fontSize: "16px",
  fontWeight: "700",
}));

export const PostDetailsFunction = styled(Box)(() => ({
  color: theme.palette.primary.base,
  fontFamily: theme.fonts.Nunito,
  fontSize: "40px",
  fontWeight: "700",
}));

export const PostDetailsDescription = styled(Box)(() => ({
  color: theme.palette.primary.base,
  fontFamily: theme.fonts.Nunito,
  fontSize: "40px",
  fontWeight: "700",
}));

export const PostDetailsListBox = styled(Grid)(() => ({
  width: "100%",
  outline: "2px solid #000",
  background: theme.palette.primary.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ListMemberCustomList = styled(List)(() => ({
  width: "100%",
  background: "#232323",
}));

export const ListMemberCustomListItemText = styled(ListItemText)(() => ({
  fontFamily: theme.fonts.Nunito,
  color: theme.palette.primary.base,
  fontWeight: "600",
  textAlign: "center",
}));
