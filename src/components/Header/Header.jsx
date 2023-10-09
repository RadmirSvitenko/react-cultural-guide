import { Close, Search } from "@mui/icons-material";
import {
  HeaderAppBar,
  LogoText,
  MenuButton,
  MyHeader,
  NavMenu,
  SearchBar,
  NavLink,
  CustomNavLink,
  SearchField,
} from "./styles";
import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Favorite from "components/Favorite/Favorite";
import AddEvent from "components/AddEvent/AddEvent";
import { display } from "@mui/system";
import { theme } from "theme";
import ModalAuth from "components/ModalAuth/ModalAuth";
import { useDispatch } from "react-redux";
import { getPostsList, serchPostsByPostList } from "reducers/postsSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openModalFavorite, setOpenModalFavorite] = useState(false);
  const [openModalAddEvent, setOpenModalAddEvent] = useState(false);
  const [openModalAuth, setOpenModalAuth] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ru");
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setOpenMenu((open) => !open);
  };

  const handleLangClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateMainPage = () => {
    navigate("/");
  };

  const handleLangChange = (language) => {
    setSelectedLang(language);
    i18n.changeLanguage(language);
    handleLangClose();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(getPostsList({ search: searchValue }));
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const handleClearSearchValue = () => {
    setSearchValue("");
  };

  const toggleModalFavorite = () => {
    setOpenModalFavorite((open) => !open);
  };

  const toggleModalAddEvent = () => {
    setOpenModalAddEvent((open) => !open);
  };

  const toggleModalAuth = () => {
    setOpenModalAuth((open) => !open);
  };

  return (
    <HeaderAppBar>
      <MyHeader>
        <MenuButton open={openMenu} onClick={toggleMenu}>
          <Menu />
        </MenuButton>
        <LogoText onClick={handleNavigateMainPage} variant="h6">
          {t("toGo")}
        </LogoText>
        <NavMenu>
          <CustomNavLink>{t("aboutUs")}</CustomNavLink>
          <CustomNavLink>{t("contacts")}</CustomNavLink>
        </NavMenu>

        <form onSubmit={handleSearchSubmit}>
          <SearchField
            label="Поиск постов..."
            value={searchValue}
            onChange={handleSearch}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton
                  type="submit"
                  sx={{ color: theme.palette.primary.base }}
                >
                  {searchValue.length >= 1 ? (
                    <Close onClick={handleClearSearchValue} />
                  ) : (
                    <Search type="submit" />
                  )}
                </IconButton>
              ),
            }}
            InputLabelProps={{
              style: { color: theme.palette.primary.base },
            }}
          />
        </form>

        <Box display={"flex"} justifyContent={"space-evenly"}>
          <IconButton onClick={toggleModalFavorite}>
            <FavoriteIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton onClick={toggleModalAuth}>
            <AccountCircleIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton onClick={toggleModalAddEvent}>
            <AddCircleIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="basic-menu"
          open={Boolean(anchorEl)}
          onClose={handleLangClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleLangChange("ru")}>RU</MenuItem>
          <MenuItem onClick={() => handleLangChange("en")}>EN</MenuItem>
        </Menu>
        <IconButton
          sx={{ color: "white" }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          {selectedLang}
          <LanguageIcon />
        </IconButton>
      </MyHeader>

      <Favorite open={openModalFavorite} onClose={toggleModalFavorite} />
      <AddEvent open={openModalAddEvent} onClose={toggleModalAddEvent} />
      <ModalAuth open={openModalAuth} onClose={toggleModalAuth} />
    </HeaderAppBar>
  );
};

export default Header;
