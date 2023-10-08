import { Search } from "@mui/icons-material";
import {
  HeaderAppBar,
  LogoText,
  MenuButton,
  MyHeader,
  NavMenu,
  SearchBar,
  NavLink,
} from "./styles";
import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Favorite from "components/Favorite/Favorite";
import AddEvent from "components/AddEvent/AddEvent";

const Header = () => {
  const [openModalFavorite, setOpenModalFavorite] = useState(false);
  const [openModalAddEvent, setOpenModalAddEvent] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ru");
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setOpenMenu((open) => !open);
  };

  const handleLangClose = () => {
    setAnchorEl(null);
  };

  const handleLangChange = (language) => {
    setSelectedLang(language);
    i18n.changeLanguage(language);
    handleLangClose();
  };

  const toggleModalFavorite = () => {
    setOpenModalFavorite((open) => !open);
  };

  const toggleModalAddEvent = () => {
    setOpenModalAddEvent((open) => !open);
  };

  return (
    <HeaderAppBar>
      <MyHeader>
        <MenuButton open={openMenu} onClick={toggleMenu}>
          <Menu />
        </MenuButton>
        <LogoText variant="h6">{t("toGo")}</LogoText>
        <NavMenu>
          <NavLink>{t("aboutUs")}</NavLink>
          <NavLink>{t("contacts")}</NavLink>
        </NavMenu>

        <SearchBar
          variant="standart"
          disableUnderline={true}
          startAdornment={
            <InputAdornment position="center" sx={{ margin: "6px" }}>
              <Search />
            </InputAdornment>
          }
          placeholder={t("search")}
        />
        <Box display={"flex"} justifyContent={"space-evenly"}>
          <IconButton onClick={toggleModalFavorite}>
            <FavoriteIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
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
    </HeaderAppBar>
  );
};

export default Header;
