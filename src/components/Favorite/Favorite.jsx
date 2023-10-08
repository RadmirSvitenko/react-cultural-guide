import { DeleteForever } from "@mui/icons-material";
import { Box, Dialog, DialogTitle, Grid, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ModalCustomDialogContent } from "../Header/styles";
import { useDispatch, useSelector } from "react-redux";
import { async } from "q";

const Favorite = ({ open, onClose }) => {
  const favotire = useSelector((state) => state.favorite.favoriteList);
  console.log("favotire: ", favotire);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   getFavoriteList();
  // }, []);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Slide}
      keepMounted
      maxWidth={"800px"}
      sx={{
        zIndex: "3000",
      }}
    >
      <DialogTitle>
        <Grid width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Box>Избранное</Box>
        </Grid>
      </DialogTitle>
      <ModalCustomDialogContent></ModalCustomDialogContent>
    </Dialog>
  );
};

export default Favorite;
