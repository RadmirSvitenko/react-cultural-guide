import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { theme } from "theme";

export const DrawerText = styled(Box)(() => ({
  fontFamily: theme.fonts.Nunito,
  fontSize: "18px",
  fontWeight: "700",
  margin: "5px 25px",
}));
