import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { theme } from "theme";

export const FavoriteContainer = styled(Grid)(() => ({
  width: "100%",
  minWidth: "400px",
  height: "auto",
  minHeight: "500px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "250px",
    minWidth: "200px",
    padding: "50px",
  },

  [theme.breakpoints.up("xs")]: {
    margin: "10px 0px",
  },
}));

export const FavoritePostBox = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  minHeight: "100px",
  outline: "2px solid violet",
  borderRadius: "25px",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "30px 0px",
  padding: "15px",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    width: "250px",
    margin: "10px 0px",
  },
}));

export const FavoritePostBoxTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "26px",
  fontWeight: "bold",
  color: theme.palette.secondary.main,
  background: theme.palette.secondary.base,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const FavoritePostBoxContent = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "20px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

export const FavoritePostBoxTime = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "20px",
  fontWeight: "bold",
}));
