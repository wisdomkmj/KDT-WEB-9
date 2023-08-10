// express module.
const express =require("express");
require("express");
const app = express();
const port = 8000;

// ejs template engine.
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
// const indexRouter = require("./routes");
// app.use("/", indexRouter);
const visitorRouter = require("./routes/visitor")
app.get("/", (req, res) => {
    res.render("index");
});
//localhost:8000/visitor
app.use("/visitor", visitorRouter)

// app.use, app.get differnce?
app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port, () => {
    console.log(`http://localhost:${8000} SERVER START!`)
});