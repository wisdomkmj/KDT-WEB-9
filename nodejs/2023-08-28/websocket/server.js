const express = require("express");
const app = express();
const ws = require("ws");
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("client");
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//웹 소켓 서버 접속.
const wss = new ws.Server({server});
//브라우저(클라이언트)들을 담을 배열 변수.
const sockets = [];
//socket 변수는 접속한 브라우저. 변수명은 임의로 해도 상관x.
wss.on("connection", (socket) => {
    console.log("클라이언트 연결 완료.")
    //sockets배열에 브라우저 정보 추가.
    sockets.push(socket);
    //메시지 이벤트.
    socket.on("message", (message) => { //여기도 매개변수 이름은 맘대로.
        console.log(`클라이언트가 보낸 메시지: ${message}`);
        //socket.send(`서버메시지: ${message}`);
        sockets.forEach(elem => {
            elem.send(`서버메시지: ${message}`);
        });
    });
    //오류 이벤트.
    socket.on("error", (err) => {
        console.log("에러 발생.", err);
    })
    //접속 종료 이벤트.
    socket.on("close", () => {
        console.log("클라이언트와 연결 종료.");
    });
});