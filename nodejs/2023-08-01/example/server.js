// express 모듈 불러오기.
const express = require("express");
const app = express();
const port = 8000;

// body-parser <<- 미들웨어.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine.
app.set("view engine", "ejs");
app.set("views", "./views");

// router

// home page
app.get("/", (req, res) => {
    res.render("home", { title: "GET과 POST로 정보 받기!"});
});

// GET-Survey page 
app.get("/getSurvey", (req, res) => {
    res.render("get_survey", {
        title: "GET으로 정보 받기!",
        userInfo: req.query, // get은 req.query
    });
});
// GET-Result page
app.get("/getResult", (req, res) => {
    res.render("get_result",{
        title: "GET으로 정보 받기 결과!",
        userInfo: req.query, // get은 req.query
    });
});     
//POST-Survey page
app.get("/postSurvey", (req, res) => {
    res.render("post_survey", {
        title: "POST로 정보 받기!",
        userInfo: req.body, // post는 req.body
    });
});
//POST-Result page
app.post("/postResult", (req, res) => {
    res.render("post_result", {
        title: "POST로 정보 받기 결과!",
        userInfo: req.body, // post는 req.body
    });
});



// 서버 오픈
app.listen(port, () => {
    console.log(`http://localhost:${port} SERVER START!`)
})