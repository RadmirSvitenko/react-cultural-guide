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
import Favorite from "./Favorite/Favorite";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleNavigateProfile = () => {
    navigate("/profile");
  };
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

  return (
    <HeaderAppBar>
      <MyHeader>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <MenuButton open={openMenu} onClick={toggleMenu}>
            <Menu />
          </MenuButton>
          <LogoText variant="h2">{t("toGo")}</LogoText>
          <NavMenu>
            <NavLink>{t("aboutUs")}</NavLink>
            <NavLink>{t("contacts")}</NavLink>
          </NavMenu>
        </Box>

        <Box>
          <SearchBar
            variant="standart"
            disableUnderline={true}
            startAdornment={
              <InputAdornment position="start" sx={{ margin: "6px" }}>
                <Search />
              </InputAdornment>
            }
            placeholder={t("search")}
          />
          <IconButton
            sx={{
              marginLeft: 40,
              color: "white",
              width: "35px",
              height: "35px",
            }}
          >
            <Badge color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleNavigateProfile}>
            <AccountCircleIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <AddCircleIcon sx={{ marginRight: 10, color: "white" }} />
          </IconButton>
        </Box>

        <Box>
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
        </Box>

        <Box>
          <Favorite />
        </Box>
      </MyHeader>
    </HeaderAppBar>
  );
};

export default Header;
