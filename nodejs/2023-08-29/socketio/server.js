const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("client");
});

//http서버
const server = http.createServer(app);
//socket서버
const io = SocketIO(server);

io.on("connection", (socket) => {
    socket.on("open_message", (arg, callback) => {
        console.log(arg);
        callback(arg);
    });
    socket.on("form_message", (arg) => {
        console.log(arg); 
        socket.emit("backend_message", arg);
    }); 
});

//서버 open
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); 
})