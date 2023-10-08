import { Typography, CircularProgress, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CakeTwoToneIcon from "@mui/icons-material/CakeTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import TransgenderTwoToneIcon from "@mui/icons-material/TransgenderTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import { useState } from "react";
import { useEffect } from "react";
import { getUserDetails } from "./ProfileSlice";
import {
  ProfileBox,
  ProfileDisplayBox,
  ProfilePaper,
  ProfileTypography,
} from "./styles";

export default function Profile() {
  const dispatch = useDispatch();
  const params = useParams();
  const currentUser = useSelector((state) => state.userData.currentUser);
  console.log("currentUser: ", currentUser);
  const user = useSelector((state) => state.userData.user);
  console.log("user: ", user);

  console.log("currentUser: ", currentUser);
  const isLoading = useSelector((state) => state.userData.isLoading);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };
  const fetchUserData = useCallback(async () => {
    await dispatch(getUserDetails(params.userId));
  }, [dispatch, params]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!currentUser) {
    return <div>Нету данных .Уходи</div>;
  }
  const style = {
    width: "100%",
    maxWidth: "100%",
    bgcolor: "background.paper",
  };

  return (
    <ProfileBox>
      <ProfilePaper elevation={20}>
        <ProfileDisplayBox>
          <Box sx={{ width: "50%" }}>
            <img
              src={currentUser.photo}
              style={{
                maxWidth: "100%",
                height: "100%",
                borderRadius: "100%",
              }}
              alt="User avatar"
            />
          </Box>
          <ProfileTypography variant="h5">
            {` ${currentUser.name} ${currentUser.last_name}`}
          </ProfileTypography>
          <Typography variant="h6">{currentUser.username}</Typography>
        </ProfileDisplayBox>
        <Button
          sx={{ padding: "10px 45%" }}
          variant="contained"
          onClick={handleOpenEditModal}
        >
          <EditIcon />
        </Button>
        <Box sx={{ maxWidth: "100%" }}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem>
              <ListItemAvatar>
                <EmailTwoToneIcon />
              </ListItemAvatar>
              <ListItemText primary={currentUser.email} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <LocalPhoneTwoToneIcon />
              </ListItemAvatar>
              <ListItemText primary={currentUser.phone_number} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <TransgenderTwoToneIcon />
              </ListItemAvatar>
              <ListItemText primary={currentUser.gender} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <CakeTwoToneIcon />
              </ListItemAvatar>
              <ListItemText primary={currentUser.date_of_birth} />
            </ListItem>
          </List>
        </Box>
      </ProfilePaper>
    </ProfileBox>
  );
}
