import { Paper } from "@mui/material";
import styled from "styled-components";
import { theme } from "theme";

export const RegistrationCompanyPaper = styled(Paper)(() => ({
  padding: "20px",
  height: "75%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
}));
