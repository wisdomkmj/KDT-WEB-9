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

const router = require("./routes"); //추가
app.use("/", router); //추가

// server start
app.listen(port, () => {
    console.log(`http://localhost${port} SERVER START!`);
});
