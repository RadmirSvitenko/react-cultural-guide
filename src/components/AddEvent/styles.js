import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

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
}));

export const AddEventCustomTextField = styled(TextField)(() => ({
  margin: "30px 0px",
}));
