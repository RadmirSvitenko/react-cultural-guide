import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Menu,
  MenuItem,
  Select,
  Slide,
} from "@mui/material";
import { Box } from "@mui/system";
import { ModalCustomDialogContent } from "components/Header/styles";
import React, { useState } from "react";
import {
  AddEventCustomTextField,
  ModalAddEventFieldBox,
  ModalAddEventTitle,
} from "./styles";
import { useDispatch } from "react-redux";
import { addPost } from "reducers/postsSlice";
import { theme } from "theme";

const AddEvent = ({ open, onClose }) => {
  const [titlePost, setTitlePost] = useState("");
  const [categoryPost, setCategoryPost] = useState([]);
  const [descriptionPost, setDescriptionPost] = useState("");
  const [pricePost, setPricePost] = useState(0);
  const [datePost, setDatePost] = useState("");
  const [timeStartPost, setTimeStartPost] = useState("");
  const [timeEndPost, setTimeEndPost] = useState("");
  const [priorityPost, setPrioretyPost] = useState("");
  const [geolocationName, setGeolocationNamePost] = useState("");
  const [organizerPost, setOrganizerPost] = useState(1);

  const dispatch = useDispatch();

  const handleAddEventSubmit = async (event) => {
    event.preventDefault();
    handleAddPost({
      title: titlePost,
      category: categoryPost,
      description: descriptionPost,
      price: pricePost,
      date: datePost,
      time_start: timeStartPost,
      time_end: timeEndPost,
      priority: priorityPost,
      geolocation_name: geolocationName,
      // organizer: organizerPost,
    });
  };

  const handleChangeFieldTitle = (e) => setTitlePost(e.target.value);
  const handleChangeFieldCategory = (e) => setCategoryPost([e.target.value]);
  const handleChangeFieldPrice = (e) => setPricePost(e.target.value);
  const handleChangeFieldDescription = (e) =>
    setDescriptionPost(e.target.value);
  const handleChangeFieldDate = (e) => setDatePost(e.target.value);
  const handleChangeFieldTimeStart = (e) => setTimeStartPost(e.target.value);
  const handleChangeFieldTimeEnd = (e) => setTimeEndPost(e.target.value);
  const handleChangeFieldPriorety = (e) => setPrioretyPost(e.target.value);
  const handleChangeFieldGeolocationName = (e) =>
    setGeolocationNamePost(e.target.value);
  const handleChangeFieldOrganizer = (e) => setOrganizerPost(e.target.value);

  const handleAddPost = (data) => {
    dispatch(addPost(data));
    console.log(data);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Slide}
      keepMounted
      maxWidth={"sm" ? "800px" : "300px"}
      sx={{
        zIndex: "3000",
      }}
    >
      <DialogTitle>
        <Grid width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <ModalAddEventTitle>Добавить мероприятие</ModalAddEventTitle>
        </Grid>

        <ModalAddEventFieldBox>
          <form onSubmit={handleAddEventSubmit}>
            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Название мероприятия"
              value={titlePost}
              onChange={handleChangeFieldTitle}
            />

            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Категория(1,2,3,4)"
              type="number"
              value={categoryPost}
              onChange={handleChangeFieldCategory}
            />

            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Описание"
              value={descriptionPost}
              onChange={handleChangeFieldDescription}
            />

            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Цена"
              value={pricePost}
              type="number"
              onChange={handleChangeFieldPrice}
            />

            <AddEventCustomTextField
              margin="dense"
              value={datePost}
              type="date"
              onChange={handleChangeFieldDate}
            />

            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Когда начинается"
              value={timeStartPost}
              onChange={handleChangeFieldTimeStart}
            />

            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Когда заканчивается"
              value={timeEndPost}
              onChange={handleChangeFieldTimeEnd}
            />

            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Значимость(low/high)"
              value={priorityPost}
              onChange={handleChangeFieldPriorety}
            />

            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Место проведения"
              value={geolocationName}
              onChange={handleChangeFieldGeolocationName}
            />

            <AddEventCustomTextField
              margin="dense"
              variant="outlined"
              label="Организатор"
              value={organizerPost}
              type="number"
              onChange={handleChangeFieldOrganizer}
            />
            {/* <Box>
              <Select
                onChange={handleChangeFieldPriorety}
                value={priorityPost}
                label="Значимость"
              >
                <MenuItem value="high">high</MenuItem>
                <MenuItem value="low">low</MenuItem>
              </Select>
            </Box> */}

            <Button
              sx={{
                margin: "15px 0px",
                [theme.breakpoints.down("sm")]: {
                  width: "200px",
                  margin: "30px 0px",
                },
              }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Добавить
            </Button>
          </form>
        </ModalAddEventFieldBox>
      </DialogTitle>
      <ModalCustomDialogContent></ModalCustomDialogContent>
    </Dialog>
  );
};

export default AddEvent;
