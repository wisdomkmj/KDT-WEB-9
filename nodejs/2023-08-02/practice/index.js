// express 모듈 불러오기
const express = require("express");
const app = express();
const port = 3000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// router
app.get("/", (req, res) => {
    res.render("index");
});

// axios get
app.get("/axiosGet", (req, res) => {    
    console.log("back", req.query);
    res.render("get",{ title: "axios get 실습"});
});
app.get("/resultGET", (req, res) => {
    res.send({ result: true, data: req.query});
})

// axios post
app.get("/axiosPost", (req, res) => {
    res.render("post",{ title: "axios post 실습"});
})
app.post("/resultPost", (req, res) => {
    const id = "kim";
    const pw = "1234";
    if ( id === req.body.id && pw === req.body.pw) {
        res.send({ result: true, userInfo: req.body});
    } else {
        res.send({ result: false, userInfo: null});
    }
});

// server start
app.listen(port, () => {
    console.log(`http://localhost${port} SERVER START!`);
});
