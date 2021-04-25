import { Avatar, Grid } from "@material-ui/core";
import React, { Fragment } from "react";

const Message = ({ classes }) => {
  return (
    <Fragment>
      {/* user message  */}
      {/* <Grid item container className={classes.userMessageContainer}>
        <Grid item>
          <Avatar>U</Avatar>
        </Grid>
        <Grid item>
          <p className={classes.userMessage}>
            hello how are you i am a user message what about you hello how
          </p>
        </Grid>
      </Grid> */}
      {/* user message  */}
      {/* current user message  */}
      <Grid
        item
        container
        justify="flex-end"
        className={classes.currentUserMessageContainer}
      >
        <p className={classes.currentUserMessage}>
          hey i am fine i am a message from where i dont know
        </p>
      </Grid>
      {/* current user message  */}
    </Fragment>
  );
};

export default Message;
