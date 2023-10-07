import { DeleteForever } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Favorite = () => {
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart((open) => !open);
  };

  return (
    <Dialog open={openCart} onClose={toggleCart}>
      <DialogTitle>Favorites</DialogTitle>
      <DialogContent>
        <Divider></Divider>
        <Box>
          {/* <img 
        style={{

        }}
        src={}
        alt={}
        /> */}
        </Box>
        <Box>
          <Typography>Название события: </Typography>
          <Typography>Дата: </Typography>
          <Typography>Время: </Typography>
          <Typography>Вход: платный/бесплатный</Typography>
          <Divider></Divider>
        </Box>
        <Box>
          <IconButton>
            <DeleteForever sx={{ color: "red" }} />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Favorite;
