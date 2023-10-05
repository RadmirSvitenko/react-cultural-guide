import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

import {
  ListMemberContainer,
  ListMemberCustomList,
  ListMemberCustomListItemText,
} from "./styles";

import { IconButton } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { theme } from "theme";

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListMemberContainer>
      <ListMemberCustomList dense>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                //   <Checkbox
                //     edge="end"
                //     onChange={handleToggle(value)}
                //     checked={checked.indexOf(value) !== -1}
                //     inputProps={{ "aria-labelledby": labelId }}
                //   />
                <IconButton>
                  <MessageIcon
                    sx={{
                      color: theme.palette.primary.base,
                    }}
                  />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={`/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListMemberCustomListItemText
                  id={labelId}
                  primary={`Line item ${value + 1}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </ListMemberCustomList>
    </ListMemberContainer>
  );
}
