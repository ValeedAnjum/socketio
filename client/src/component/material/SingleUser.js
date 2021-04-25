import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";

const SingleUser = ({ index }) => {
  return (
    <ListItem button key={index}>
      <ListItemAvatar>
        <Avatar>H</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Valeed Anjum"
        secondary={`I am message ${index}`}
      />
    </ListItem>
  );
};

export default SingleUser;
