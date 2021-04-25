import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => {
  return {
    appContainer: {
      position: "absolute",
      width: "100%",
      height: "100vh",
      backgroundColor: "white",
      top: 0,
      left: 0,
      zIndex: 1111111,
    },
    users: {
      height: "100vh",
      // border: "1px solid blue",
    },
    userMessages: {
      height: "100vh",
      // border: "1px solid black",
    },
    list: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      padding: 0,
      overflow: "auto",
      borderRight: "1px solid #dfcccc",
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
      },
    },
    userInfo: {
      padding: "5px",
      borderBottom: "1px solid #dfcccc",
      userSelect: "none",
    },
    messagesArea: {
      height: "75vh",
      padding: "5px",
      flexWrap: "nowrap",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d4d4d4",
      },
    },
    messageTypingArea: {
      borderTop: " 1px solid #dfcccc",
    },
    messageTypingInnerArea: {
      margin: "15px 0",
    },
    userMessageContainer: {
      marginBottom: "5px",
    },
    userMessage: {
      backgroundColor: "#ccccc0",
      margin: "0",
      padding: "5px 5px",
      borderRadius: "8px 8px 8px 0px",
      marginLeft: "5px",
      maxWidth: "500px",
    },
    currentUserMessageContainer: {
      marginBottom: "5px",
    },
    currentUserMessage: {
      backgroundColor: "#ccccc0",
      margin: "0",
      padding: "5px 5px",
      borderRadius: "8px 8px 0px 8px",
      maxWidth: "500px",
      marginRight: "5px",
    },
    messageTypingInput: {
      outline: "none",
      border: "1px solid #bcb8b8",
      width: "100%",
      resize: "none",
      height: "87%",
      // "&::-webkit-scrollbar": {
      //   width: "0.5em",
      // },
      // "&::-webkit-scrollbar-thumb": {
      //   backgroundColor: "#d4d4d4",
      // },
    },
    messgaeSendButton: {
      outline: "none",
      border: "1px solid #bcb8b8",
      height: "100%",
      cursor: "pointer",
    },
  };
});
