// express 모듈 불러오기
const express = require("express");
const app = express();
const port = 8000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes"); // index.js는 생략 가능. 기본적으로 찾게됨.
app.use("/", router); // "/" 루트로 들어왔을때 실행?
// ex) 
// const userRouter = require("./routes/user");
// app.use("/", userRouter);

// 맨 마지막 선언
app.get("*", (req, res) => {
    res.render("404");
});

// server start
app.listen(port, () => {
    console.log(`http://localhost${port} SERVER START!`);
});;

