const express = require("express");
const app = express();
const port = 8000;

// body-parser <<- 미들웨어
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// router
app.get("/", (req, res) => {
    //console.log(req.body);
    //res.send("hello");
    res.render("index", {title:"폼 전송 실습"});
});
app.get("/getForm", (req, res) => {
    console.log(req.query);
    res.render("result", {
        title: "GET 요청 폼 결과 확인하기",
        userInfo: req.query, 
    });
});

app.post("/postForm", (req, res) => {
    console.log(req.body);
    res.render("result",{
        title: "POST 요청 폼 결과 확인하기",
        userInfo: req.body, 
    });
});
app.listen(port , () => {
    console.log(`http://localhost:${port}`);
});