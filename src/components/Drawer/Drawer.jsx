import {
  Checkbox,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DrawerText } from "./styles";
import { useDispatch } from "react-redux";
import { getPostsCategory, getPostsList } from "reducers/postsSlice";
import { Box } from "@mui/system";

const AppDrawer = ({ open, onClose }) => {
  const [filterChecked, setFilterChecked] = useState("");

  const dispatch = useDispatch();

  const handleChangeFilterCategory = async (event) => {
    const { name, checked } = event.target;
    console.log("checked: ", checked);
    console.log("name: ", name);
    // await dispatch(getPostsCategory({ id: name }));
    await dispatch(getPostsList({ category__title: name }));
    setFilterChecked(name);
  };

  return (
    <Box>
      <Drawer anchor={"left"} open={open} onClose={onClose}>
        <DrawerText>
          <Checkbox
            name="семейное"
            checked={filterChecked === "семейное"}
            onChange={handleChangeFilterCategory}
          />
          Семейное{" "}
        </DrawerText>
        <DrawerText>
          <Checkbox
            name="концерт"
            checked={filterChecked === "концерт"}
            onChange={handleChangeFilterCategory}
          />
          Концерт{" "}
        </DrawerText>
        <DrawerText>
          <Checkbox
            name="развлечения"
            checked={filterChecked === "развлечения"}
            onChange={handleChangeFilterCategory}
          />
          Развлечения{" "}
        </DrawerText>

        <DrawerText>
          <Checkbox
            name="парки"
            checked={filterChecked === "парки"}
            onChange={handleChangeFilterCategory}
          />
          Парки{" "}
        </DrawerText>

        <DrawerText>
          <Checkbox
            name="прогулка"
            checked={filterChecked === "прогулка"}
            onChange={handleChangeFilterCategory}
          />
          Прогулка{" "}
        </DrawerText>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;
