// express 모듈 불러오기
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 8000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//정적파일 설정, 아래 동적파일이 안열리는 문제 해결.
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer
const upload = multer({
    dest: 'uploads/', //dest: 업로드할 파일을 저장할 경로를 지정.
}) 

const uploadDetail = multer({
    storage: multer.diskStorage({ // storage: 저장할 공간에 대한 정보, diskStorage: 파일을 디스크에 지정하기 위한 모든 제어 기능을 제공.  
        destination(req, file, done) {
            done(null, "uploads/")
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            console.log("ext", ext);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

// router
app.get("/", (req, res) => {
    res.render("index");
});

// 싱글
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
})

// 멀티 ver.1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
    console.log(req.files);
    console.log(req.body);
});

// 멀티 ver.2
app.post("/upload/fields", uploadDetail.fields([{name: "userfile1"},{name: "userfile2"}]),(req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("upload multiple each!")
}); //key는 name이다.

// 동적
app.post("/dynamicFile", uploadDetail.single("dynamic-file"),(req, res) =>
{
    console.log(req.file);
    res.send(req.file);
});

// server start
app.listen(port, () => {
    console.log(`http://localhost${port} SERVER START!`);
});