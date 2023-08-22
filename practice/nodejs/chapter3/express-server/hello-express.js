const express = require("express"); // express 모듈 불러오기.
const app = express(); // express를 초기화 후 app에 할당.
const port = 3000;

app.get("/", (req ,res) => { // /로 요청이 오는 경우 실행.
    res.set({ "Content-Type": "text/html; charset=utf-8 "}); // 헤더값 설정.
    res.end("Hello express");
});

app.listen(port, () => {
    console.log(`START SERVER : use ${port}`);
})