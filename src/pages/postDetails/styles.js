import { Grid } from "@mui/material";
import styled from "styled-components";
import { theme } from "theme";

export const PostDetailsTabsContainer = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  background: theme.palette.primary.secondary,
}));
