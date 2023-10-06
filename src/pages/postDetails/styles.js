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
  height: "500px",
  display: "flex",
  margin: "50px 0px",
  outline: "2px solid #000",
  borderRadius: "25px",
  background: `url("https://willfaulkner.com/wp-content/uploads/2020/09/The-best-photography-locations-in-the-world-featured-image.jpg")`,
}));

export const PostDetailsContentBox = styled(Grid)(() => ({
  width: "50%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "500px",
  minHeight: "500px",
  padding: "20px",
  outline: "2px solid #000",
  borderRadius: "25px",
  margin: "50px 0px",
  background: "#303030",
}));

export const ContentBoxEventDescription = styled(Box)(() => ({
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
