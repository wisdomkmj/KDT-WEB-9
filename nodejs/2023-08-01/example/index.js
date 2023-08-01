// express 모듈 불러오기.
const express = require("express");
const app = express();
const port = 8000;

// body-parser <<- 미들웨어.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine.
app.set("view engine", "ejs");
app.set("view", "./views");

// router
app.get("/", (req, res) => {
    res.render("index", { title: "GET 정보 받기."});
});

// GET
app.get("/getForm", (req, res) => {
    res.render("gett", {
        title: "GET 요청 결과.",
        userInfo: req.query,
    })
})

// 서버 오픈
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})