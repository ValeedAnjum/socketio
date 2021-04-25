const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
//creating a  http server;
const server = http.createServer(app);
//socket.io instance
const io = socketio(server);

//on new connection and disconnection
io.on("connection", (socket) => {
  //fire when a new user join
  socket.on("join", (data) => {
    socket.emit("message", {
      ...data,
      msg: `${data.name} has joined the room`,
    });
    socket.join("khan");
  });

  socket.on("message", (data) => {
    //send message to whole except the current one

    // socket.broadcast.emit("message", data);
    //send message to the whole room

    io.to("khan").emit("message", data);
  });
});

app.use(cors());
server.listen(PORT, () => console.log(`Server is running at PORT ${PORT} `));
