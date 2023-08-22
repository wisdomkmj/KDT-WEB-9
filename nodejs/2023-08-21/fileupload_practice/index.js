const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
console.log(__dirname);

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads/");
    },
    filename: (req, file, callback) => {
        const ext = path.extname(file.originalname);
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        callback(null, newName);
    },
});

const limits = {
    fileSize: 5 * 1024 * 1024
};

const upload = multer({ storage, limits });

app.get("/", (req ,res) => {
    res.render("index");
});

app.post("/upload", upload.array("dynamic"), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});


app.use("*", (req, res) => {
    res.render("404");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});