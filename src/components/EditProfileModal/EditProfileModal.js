import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CakeTwoToneIcon from "@mui/icons-material/CakeTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import TransgenderTwoToneIcon from "@mui/icons-material/TransgenderTwoTone";
import CheckIcon from "@mui/icons-material/Check";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import API from "requester";
import {
  ProfileBox,
  ProfileDisplayBox,
  ProfilePaper,
  ProfileTypography,
} from "pages/ProfilePage/styles";
import { updateUserDetails } from "pages/ProfilePage/ProfileSlice";
import { EditGrid, EditPaper } from "./styles";

function EditProfileModal({ onClose }) {
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

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setUpdatedUserData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : `${month}`;
    day = day < 10 ? `0${day}` : `${day}`;

    return `${year}-${month}-${day}`;
  };
  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("name", updatedUserData.name);
      formData.append("last_name", updatedUserData.last_name);
      formData.append("username", updatedUserData.username);
      formData.append("email", updatedUserData.email);
      formData.append("phone_number", updatedUserData.phone_number);
      formData.append("gender", updatedUserData.gender);
      formData.append("date_of_birth", updatedUserData.date_of_birth);
      if (updatedUserData.photo) {
        formData.append("photo", updatedUserData.photo);
      }

      const response = await API.put(`/profile/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const updatedData = response.data;
      dispatch(updateUserDetails({ ...currentUser, ...updatedData }));
      onClose();
      console.log("Обновленные данные:", updatedData);
      onClose();
    } catch (error) {
      console.error("Ошибка обновления профиля:", error);
    }
  };
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: formatDate(value),
    }));
  };
  const style = {
    width: "100%",
    maxWidth: "100%",
    bgcolor: "background.paper",
  };
  return (
    <ProfileBox>
      <EditPaper elevation={20}>
        <ProfileDisplayBox>
          <Box
            sx={{
              width: "100px",
              borderRadius: "100%",
              position: "relative",
            }}
          >
            <img
              style={{
                maxWidth: "100%",
                width: "100%",
                borderRadius: "100%",
              }}
              src={updatedUserData.photo}
              alt="User"
            />
            <IconButton
              variant="contained"
              component="label"
              sx={{
                fontSize: "10px",
                position: "absolute",
                bottom: "10px",
                right: "-20px",
                background: "white",
              }}
            >
              <EditIcon />
              <Input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: "none" }}
              />
            </IconButton>
          </Box>
          <EditGrid container xs={12}>
            <Grid item xs={4}>
              <TextField
                name="name"
                variant="standard"
                placeholder="Имя"
                value={updatedUserData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="last_name"
                variant="standard"
                placeholder="Фамилия"
                value={updatedUserData.last_name}
                onChange={handleInputChange}
              />
            </Grid>
          </EditGrid>
          <TextField
            name="username"
            variant="standard"
            placeholder="Ник"
            value={updatedUserData.username}
            onChange={handleInputChange}
          />
        </ProfileDisplayBox>

        <Box sx={{ maxWidth: "100%" }}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem>
              <ListItemAvatar>
                <EmailTwoToneIcon />
              </ListItemAvatar>
              <TextField
                variant="standard"
                name="email"
                placeholder="Электронная почта"
                type="email"
                value={updatedUserData.email}
                onChange={handleInputChange}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <LocalPhoneTwoToneIcon />
              </ListItemAvatar>
              <TextField
                variant="standard"
                placeholder="Номер телефона"
                name="phone_number"
                type="tel"
                value={updatedUserData.phone_number}
                onChange={handleInputChange}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <TransgenderTwoToneIcon />
              </ListItemAvatar>
              <FormControl sx={{ minWidth: 0, maxWidth: 200 }}>
                <Select
                  name="gender"
                  value={updatedUserData.gender}
                  onChange={handleInputChange}
                >
                  <MenuItem value="male">Мужчина</MenuItem>
                  <MenuItem value="female">Женщина</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <CakeTwoToneIcon />
              </ListItemAvatar>
              <TextField
                name="date_of_birth"
                type="date"
                value={formatDate(updatedUserData.date_of_birth)} // Функция formatDate нужна для преобразования формата
                onChange={handleDateChange} // Обработчик изменения даты
              />
            </ListItem>
          </List>
          <Button
            sx={{ padding: "10px 45%" }}
            variant="contained"
            onClick={handleUpdateProfile}
          >
            <CheckIcon />
          </Button>
        </Box>
      </EditPaper>
    </ProfileBox>
  );
}

export default EditProfileModal;
