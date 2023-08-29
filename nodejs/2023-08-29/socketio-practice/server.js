const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("client");
});

const server = http.createServer(app);
const io = SocketIO(server);

////
io.on("connection", (socket) => {
    socket.on("send-hello", (data) => {
        console.log(`${data.name}, ${data.message}`);
        
    });
    socket.on("send-study", (data) => {
        console.log(`${data.name}, ${data.message}`); 
        socket.emit("backend_message", arg);
    });
    socket.on("send-bye", (data) => {
        console.log(`${data.name}, ${data.message}`); 
        socket.emit("backend_message", arg);
    });  
});


////

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});