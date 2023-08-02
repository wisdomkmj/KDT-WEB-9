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
    res.render("index", { title: "axios get 회원가입"});
});

// axios
app.get("/axios", (req, res) => {    
    console.log("back", req.query);
    res.send(req.query);
});

// server start
app.listen(port, () => {
    console.log(`http://localhost${port} SERVER START!`);
});
