const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.set ("view engine","ejs");

// const cookieConfig = {

// }
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`http://localhost${port}`);
});