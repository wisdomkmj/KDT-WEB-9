// express 모듈 불러오기
const express = require("express");
const multer = require("multer");
const { userInfo } = require("os");
const path = require("path");
const app = express();
const port = 8000;

// view engin
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// 정적파일
app.use('/uploads', express.static(__dirname + '/uploads'));

// multer
const upload = multer({
    dest: 'uploads/', //dest: 업로드할 파일을 저장할 경로를 지정.
})

const uploadDetail = multer({
    storage: multer.diskStorage({ // storage: 저장할 공간에 대한 정보, diskStorage: 파일을 디스크에 지정하기 위한 모든 제어 기능을 제공.  
        destination(req, file, done) {
            done(null, "uploads/")
        },
        filename(req, file, done) { // 확장자 띄우기 위한 코드. 외우기 ㄱ.
            const ext = path.extname(file.originalname);
            console.log("ext", ext); // ext <<- 확장자 출력.
            done(null, path.basename(req.body.userId, ext) + ext);
            // done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },          // Date.now() <<- 얘는 필수는 아니지만, 중복방지용으로 걍 넣어줌.
        
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

// router
app.get('/', (req, res) => {
    res.render('index', { title: '실습1. 파일 업로드'});
});


// 싱글
app.post('/result', uploadDetail.single('userProfile'), (req, res) => {
    res.render("result", {
        userInfo: req.body,
        userProfile: req.file.path,
    });
    console.log(req.file.path);
});

// server start
app.listen(port, () => console.log(`http://localhost${port} SERVER START!`));