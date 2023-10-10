import { DeleteForever } from "@mui/icons-material";
import { Box, Dialog, DialogTitle, Grid, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ModalCustomDialogContent } from "../Header/styles";
import { useDispatch, useSelector } from "react-redux";
import { async } from "q";
import { getFavoriteList } from "reducers/favoriteSlice";
import {
  FavoriteContainer,
  FavoritePostBox,
  FavoritePostBoxContent,
  FavoritePostBoxTime,
  FavoritePostBoxTitle,
} from "./styles";

const Favorite = ({ open, onClose }) => {
  const favotire = useSelector((state) => state.favorite.favoriteList);
  console.log("favotire: ", favotire);

  const dispatch = useDispatch();

  const getFavorite = async () => {
    await dispatch(getFavoriteList());
  };

  useEffect(() => {
    getFavorite();
  }, []);

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
      <ModalCustomDialogContent>
        <FavoriteContainer>
          {favotire?.map(({ events }) => (
            <FavoritePostBox>
              <FavoritePostBoxTitle>{events.title}</FavoritePostBoxTitle>
              <FavoritePostBoxContent>
                Начало:{events.time_start}
              </FavoritePostBoxContent>

              <FavoritePostBoxContent>
                Конец: {events.time_end}
              </FavoritePostBoxContent>

              <FavoritePostBoxContent>
                Описание: {events.description}
              </FavoritePostBoxContent>

              <FavoritePostBoxContent>
                Где пройдёт: {events.geolocation_name}
              </FavoritePostBoxContent>

              <FavoritePostBoxContent>
                Организатор: {events.organizer}
              </FavoritePostBoxContent>

              <FavoritePostBoxContent>
                Цена: {events.price} сом
              </FavoritePostBoxContent>

              <FavoritePostBoxContent>
                Значимость: {events.priority}
              </FavoritePostBoxContent>

              <FavoritePostBoxContent>
                Просмотрело людей: {events.views}
              </FavoritePostBoxContent>
              {/* <FavoritePostBoxTime>{events.time_end}</FavoritePostBoxTime> */}
            </FavoritePostBox>
          ))}
        </FavoriteContainer>
      </ModalCustomDialogContent>
    </Dialog>
  );
};

export default Favorite;
