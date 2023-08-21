const express = require("express");
const multer = require("multer");
const path = require("path"); //폴더와 파일의 경로를 쉽게 조작하도록 제공.
const app = express();
const port = 8000;

//view engine
app.set("view engine", "ejs");

// app.set("views", "./views");
//views라는 설정을 다른 폴더로 바꿀때 쓰는 옵션.
//views라는 폴더를 기본으로 사용할때는 생략 가능.

//body-parser
//req.body 즉, post 전송일때 사용.
app.use(express.urlencoded({extended:true}))
//extended: 중첩된 객체표현을 허용할지 말지 정함.
//application/x-www-form-urlencoded
app.use(express.json());
//application/json
//정적파일 설정.
//서버 실행시 http://localhost:8000/uploads/파일명
app.use("/uploads", express.static(__dirname + "/uploads"));
console.log(__dirname); //__dirname의 경로 확인.

//multer 설정.
//diskStorage: 파일 저장 관련 설정 객체.
const storage = multer.diskStorage({
    //destination : 저장될 경로를 지정(요청객체, 업로드된 파일객체, 콜백함수)
    destination: (req, file, callback) => {
        callback(null, "uploads/");
    },
    //filename: 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename: (req, file, callback) => {
        //extname: 확장자를 추출.
        const ext = path.extname(file.originalname);
        //basename: 파일이름 추출(파일이름, 확장자) => 확장자를 제외해서 파일이름이 추출.
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        callback(null, newName);
    },
});

const limits = {
    fileSize: 5 * 1024 * 1024 
}; 
// 1024 * 1024 = 1MB, 5개가 있으니 5MB.
//ket-value에서 key값과 value의 변수가 동일하면 합질 수 있음.
const upload = multer({ storage, limits });

app.post("/upload", upload.single("userfile"), (req, res) => {
    console.log(req.file);
    res.send(req.body);
});

//멀티(ver1): array()
app.post("/upload/array", upload.array("userfiles", 2), (req, res) => {
    console.log(req.files);
    res.send(req.body);
});

//멀티(ver2): fields()
app.post("/upload/fields", upload.fields([{name: "userfile1", maxCount: 2}, {name: "userfile2"}]), (req, res, err) => {
    console.log(req.files);
    res.send(req.body);
});

//동적(비동기)
app.post("/dynamic", upload.single("dynamic"), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});

//페이지를 지정할때는 미들웨어 use를 사용.
app.get("/", (req, res) => {
    res.render("index");
});
//use는 http 전송방식을 이해하지 못함.
//같은 url롤 get, post를 만들 수 있지만 use로는 접근이 힘듦.
//ex) get 방식의 "/login"과 poset 방식의 "/login"은 다른 페이지이지만
//use는 동일한 페이지로 인식.
//use는 404 error 페이지 일때 사용!
app.use("*", (req, res) => {
    res.render("404");
});

app.listen(port ,() => {
    console.log(`http://localhost:${port}`);
});
