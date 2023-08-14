const express = require("express");
const app = express();
const port = 8000;
const db = require("./models");

app.set("view engine", "ejs");
// app.set("views", "./views"); 생략가능 nodejs에서 알아서 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
})
const studentRouter = require("./routes/student");
app.use("/student", studentRouter);

// force : 테이블을 강제로 다시 생성
db.sequelize.sync({
    force : false
}).then(()=>{
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });

})