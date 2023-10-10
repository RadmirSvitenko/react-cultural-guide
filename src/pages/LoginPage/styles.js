import { Box } from "@mui/system";
import styled from "styled-components";
import { theme } from "theme";

export const LoginBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backrgound: theme.palette.primary.main,
}));
