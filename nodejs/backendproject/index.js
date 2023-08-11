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

db.sequelize.sync().then((force = false)=>{
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });

})