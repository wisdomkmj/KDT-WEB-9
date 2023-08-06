// express 모듈 불러오기
const express = require('express');
const multer = require("multer");
const path = require("path"); // 경로설정
const app = express();
const port = 8000;

// view engin
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// 정적파일
// app.use('/uploads', express.static(__dirname + '/uploads'));
// 정적파일
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// multer 세팅
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) { // 확장자 띄우기 위한 코드. 외우기 ㄱㄱ
            console.log("filename: ", req.body);
            const ext = path.extname(file.originalname);
            done(null, req.body.userId + Date.now() + ext);
            //Date.now()  중복을 방지하지 위해 넣어준다. 필수는 아님.
        }, 
    }),
    limits: { fileSize: 10 * 1024* 1024 },
});

// .file.path 파일 경로 설정.

// router
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', uploadDetail.single("profile"), (req, res) => {
    res.render('result', {
        userInfo: req.body,
        profile: req.file.path,
    });
});

// server start
app.listen(port, () => console.log(`http://localhost${port} SERVER START!`));