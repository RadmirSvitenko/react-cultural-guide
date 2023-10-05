import { Grid, List, ListItemText } from "@mui/material";
import styled from "styled-components";
import { theme } from "theme";

export const ListMemberContainer = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  background: theme.palette.primary.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ListMemberCustomList = styled(List)(() => ({
  width: "100%",
  maxWidth: "500px",
  background: "#232323",
}));

export const ListMemberCustomListItemText = styled(ListItemText)(() => ({
  fontFamily: theme.fonts.Nunito,
  color: "#fff",
  fontWeight: "600",
}));
