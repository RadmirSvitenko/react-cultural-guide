import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../UserProfile/UserProfileDesktopSlice";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import API from "requester";

function EditProfilePage({ onClose }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userData.currentUser);
  const [updatedUserData, setUpdatedUserData] = useState(currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await API.put(`/update`, updatedUserData);
      const updatedData = response.data;
      dispatch(updateUserDetails({ ...currentUser, ...updatedData }));
      onClose();
      console.log("Обновленные данные:", updatedData);
    } catch (error) {
      console.error("Ошибка обновления профиля:", error);
    }
  };

  return (
    <ProfileBox>
      <ProfilePaper elevation={20}>
        <ProfileDisplayBox>
          <Box sx={{ width: "50%" }}>
            <img
              src={
                currentUser.photo ||
                "https://www.roiconnect.ca/wp-content/uploads/2021/07/DefaultAvatar.png"
              }
              style={{
                maxWidth: "100%",
                height: "100%",
                borderRadius: "100%",
              }}
              alt="User avatar"
            />
            {/* Allow the user to upload a new profile picture */}
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </Box>
          <ProfileTypography variant="h5">
            {/* Allow the user to edit name and last name */}
            <input
              type="text"
              value={currentUser.name}
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <input
              type="text"
              value={currentUser.last_name}
              onChange={(e) => handleLastNameChange(e.target.value)}
            />
          </ProfileTypography>
          {/* Allow the user to edit username */}
          <input
            type="text"
            value={currentUser.username}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
        </ProfileDisplayBox>
        <Button
          sx={{ padding: "10px 45%" }}
          variant="contained"
          onClick={handleUpdateProfile}
        >
          <EditIcon />
        </Button>
        <Box sx={{ maxWidth: "100%" }}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem>
              <ListItemAvatar>
                <EmailTwoToneIcon />
              </ListItemAvatar>
              {/* Allow the user to edit email */}
              <input
                type="email"
                value={currentUser.email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <LocalPhoneTwoToneIcon />
              </ListItemAvatar>
              <input
                type="tel"
                value={currentUser.phone_number}
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <TransgenderTwoToneIcon />
              </ListItemAvatar>
              <input
                type="text"
                value={currentUser.gender}
                onChange={(e) => handleGenderChange(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <CakeTwoToneIcon />
              </ListItemAvatar>
              <input
                type="date"
                value={currentUser.date_of_birth}
                onChange={(e) => handleDateOfBirthChange(e.target.value)}
              />
            </ListItem>
          </List>
        </Box>
      </ProfilePaper>
    </ProfileBox>
  );
}

export default EditProfilePage;
