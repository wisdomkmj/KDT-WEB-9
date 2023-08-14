const express = require("express");
const app = express();
const port = 8000;
const bodyparser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = requier("./routes");
app.use("/visitor", router);

app.listen(port, () => {
    console.log(`http://localhost:${port} server start.`)
})