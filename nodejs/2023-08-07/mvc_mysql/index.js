const express =require("express");
const app = express();
const port = 8000;
const mysql = require("mysql")

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mysql 연결
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0000",
    database: "kdt9",
    port:3306,
})
conn.connect((err) => {
    if (err) {
        console.log("error");
        returnn;
    }
    console.log("connect");
})

// const indexRouter = require("./routes");
// app.use("/", indexRouter);

app.get("/", (req, res) => {
    res.render("index");
});
// GET /visitor 방명록 전체 보이기
app.get("/visitor", (req, res) => {
    const query = "SELECT * FROM visitor" // 전체 데이터를 가져오는 쿼리.
    conn.query(query, (err, rows) => {
        console.log(rows);
    })
    res.render("visitor", { data: rows });
});
// GET /visitor/get 방명록 하나 조회
app.get("/visitor/get", (req, res) => {
    res.send("방명록 하나조회");
});
// POST /visitor/write 방명록 하나 생성
app.post("/visitor/write", (req, res) => {
    const query = "INSERT INTO visitor (name, comment) VALUES ("${req.body.name}", )
    conn.query(query, (err, rows) => {
        
    }) 
    res.send({id: rows.insertId, name: req.body.name, comment: req.body.comment});
});
// PATCH /visitor/edit 방명록 하나 수정
app.patch("/visitor/edit", (req, res) => {
    res.send("방명록 하나 수정");
});
// DELETE /visitor/edit 방명록 하나 삭제
app.post("/visitor/delete", (req, res) => {
    res.send("방명록 하나 삭제");
});

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port, () => {
    console.log(`http://localhost:${8000} SERVER START!`)
});