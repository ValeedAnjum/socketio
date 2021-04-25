import {
  Avatar,
  Button,
  Grid,
  Hidden,
  Icon,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import React, { useEffect } from "react";
import { useStyle } from "./makeStyle.js";
import SingleUser from "./SingleUser.js";
import Message from "./Message.js";

const Chatapp = () => {
  const classes = useStyle();
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
    console.log("c");
  }, []);
  return (
    <div className={classes.appContainer}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Hidden smDown>
          {/* chat users  */}
          <Grid
            item
            sm={2}
            className={classes.users}
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            {/* a single user  */}
            <List className={classes.list}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => {
                return <SingleUser index={index} />;
              })}
            </List>
            {/* a single user  */}
          </Grid>
        </Hidden>
        {/* chat users  */}
        {/* chat content area  */}
        <Grid item sm={10} xs={12} className={classes.userMessages}>
          {/* user info and delete chat button  */}
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.userInfo}
          >
            <Grid item>
              <Typography variant="h4">Valeed Anjum</Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
          {/* user info and delete chat button  */}
          {/* messages conatiner  */}
          <Grid className={classes.messagesArea}>
            <Message classes={classes} />
          </Grid>
          <Grid
            container
            justify="center"
            className={classes.messageTypingArea}
          >
            <Grid
              item
              container
              justify="center"
              alignItems="stretch"
              className={classes.messageTypingInnerArea}
            >
              <Grid item container justify="center" xs={1}>
                <IconButton>
                  <AttachFileIcon />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <textarea className={classes.messageTypingInput}></textarea>
              </Grid>
              <Grid item xs={1}>
                <button className={classes.messgaeSendButton}>SEND</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* chat content area  */}
      </Grid>
    </div>
  );
};

export default Chatapp;
