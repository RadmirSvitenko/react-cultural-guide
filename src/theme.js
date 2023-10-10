import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5691c8", //акцент
      // secondary: "#E9FFF3", //фоны
      base: "white", //кнопки
    },

    secondary: {
      main: "#ffc107",
      secondary: "#4527a0",
      base: "#000",
    },
  },

  fonts: {
    Nunito: "Nunito, sans-serif",
  },
});
