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
    //클라이언트 상태확인
    //ws/CONNECTING: 0 웹소켓이 연결 시도중.
    //ws.OPEN: 1 웹소켓이 열린 상태.
    //ws.CLOSING: 2 웹소켓이 닫힌 상태.
    //ws/CLOSED: 3 웹소켓이 닫힌 상태.
    //socket.readyState: 웹소켓의 클라이언트 상태를 나타내는 속성.
    console.log(ws.OPEN);
    //sockets배열에 브라우저 정보 추가.
    // sockets.push(socket);
    //메시지 이벤트.
    socket.on("message", (message) => { //여기도 매개변수 이름은 맘대로.
        //웹소켓을 통해 클라이언트와 서버간의 데이터를 주고 받을 때는 일반적으로 문자열 또는 버퍼형태로 전달됨.
        //서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 반환하는 직렬화 과정이 필요.
        const msg = JSON.parse(message);
        console.log(`클라이언트로부터 받은 메시지: ${msg.message}`);
        //socket.send(`서버메시지: ${message}`);
        wss.clients.forEach((elem) => {
            console.log(elem.readyState);
            elem.send(`${msg.user}: ${msg.message}`);
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

// const express = require("express");
// const app = express();
// const ws = require("ws");
// const path = require("path");  // path 모듈을 추가해야 정적 파일을 제공할 수 있습니다.
// const PORT = 8000;

// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));  // public 폴더를 정적 파일 제공을 위해 설정

// app.get("/", (req, res) => {
//     res.render("client");
// });

// const server = app.listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
// });

// //웹 소켓 서버 접속.
// const wss = new ws.Server({ server });

// //브라우저(클라이언트)들을 담을 배열 변수.
// const sockets = [];

// wss.on("connection", (socket) => {
//     console.log("클라이언트 연결 완료.");
    
//     socket.on("message", (message) => {
//         console.log(`메시지 받음: ${message}`);
//         sockets.forEach(elem => {
//             elem.send(message);  // 모든 클라이언트에게 메시지 전송
//         });
//     });

//     socket.on("error", (err) => {
//         console.log("에러 발생.", err);
//     });

//     socket.on("close", () => {
//         console.log("클라이언트와 연결 종료.");
//     });
// });
