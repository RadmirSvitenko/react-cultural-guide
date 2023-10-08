import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { theme } from "theme";

export const ModalAddEventFieldBox = styled(Box)(() => ({
  display: "flex",
  width: "400px",
  padding: "20px",
  height: "auto",
  minHeight: "350px",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    padding: "0px",
  },
}));

export const AddEventCustomTextField = styled(TextField)(() => ({
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
}));

export const ModalAddEventTitle = styled(Box)(() => ({
  fontWeight: "800",
  fontFamily: theme.fonts.Nunito,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));
