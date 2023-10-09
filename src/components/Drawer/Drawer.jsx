import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";

const AppDrawer = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((open) => !open);
  };

  return (
    <Drawer anchor="left" open={openMenu} onClose={toggleMenu}>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
          <ListItemText primary="Item 2" />
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AppDrawer;
