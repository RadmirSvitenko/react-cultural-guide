import {
  AppBar,
  DialogContent,
  IconButton,
  Input,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "theme";

export const HeaderAppBar = styled(AppBar)(() => ({
  width: "100%",
  height: "80px",
  boxShadow: "initial",
}));

export const MyHeader = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
  height: "80px",
  alignItems: "center",
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  // [theme.breakpoints.down("sm")]: {
  //   display: "inline",
  // },
}));

export const LogoText = styled(Typography)(() => ({
  color: "white",
  fontSize: "15px",
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const NavMenu = styled("nav")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "40px",
  gap: "30px",
}));

export const NavLink = styled(Link)(() => ({
  color: "white",
  fontSize: "18px",
  textDecoration: "none",
}));

export const SearchBar = styled(Input)(() => ({
  maxHeight: "48px",
  border: "none",
  padding: "5px 8px",
  borderRadius: "62px",
  background: "#f0f0f0",
  width: "500px",
}));

export const ModalCustomDialogContent = styled(DialogContent)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  minWidth: "400px",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    width: "250px",
    margin: "10px 0px",
    justifyContent: "center",
  },
}));

export const CustomNavLink = styled(NavLink)(() => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const SearchField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    color: theme.palette.primary.base,
    letterSpacing: "2px",
    fontFamily: theme.fonts.Nunito,

    "& fieldset": {
      borderColor: theme.palette.primary.base,
      transition: "0.5s",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.base,
      transition: "0.5s",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.base,
      transition: "0.5s",
    },
    "&.MuiInputLabel-outlined": {
      color: theme.palette.primary.base,
    },

    "&.MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.base,
    },
  },
}));
