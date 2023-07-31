const http =require("http");
const server = http.createServer((req,res) => {
    res.setHeader("Content-Type", "text/html"); // 응답의 헤더 설정.
    //res.end("OK"); // OK를 응답하고 종료.
    res.end("HI");
})

server.listen("3000", () => console.log("OK 서버 시작!")); // 접속 대기.