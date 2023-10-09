import { Paper } from "@mui/material";
import styled from "styled-components";
import { theme } from "theme";

export const RegistrationPaper = styled(Paper)(() => ({
  padding: "30px",
  height: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
}));
