import React, { useEffect, useState } from "react";
import io from "socket.io-client";
let socket;
const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    socket = io.connect(ENDPOINT);
    socket.emit("join", { name: "Valeed", room: "khan" });
  }, []);
  const sendMessage = () => {
    socket.emit("message", { name: "Ali", msg: message });
    setMessage("");
  };
  useEffect(() => {
    socket.on("message", (newMsg) => {
      console.log("haha");
      setMessages((msg) => [...msg, newMsg]);
    });
  }, []);
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <div>
        {messages.map((messgaeInfo, index) => {
          const { name, msg } = messgaeInfo;
          return (
            <p key={index}>
              {name}:{msg}
            </p>
          );
        })}
      </div>
      <input
        type="text"
        style={{ width: "100%" }}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={sendMessage}>Submit</button>
    </div>
  );
};

export default ChatApp;
