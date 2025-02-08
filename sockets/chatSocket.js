const socketIO = require("socket.io");

const chatSocket = (server) => {
  const io = socketIO(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("sendMessage", (data) => {
      io.emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

module.exports = chatSocket;
