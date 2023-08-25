const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');
const cookieParser = require("cookie-parser");
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); 
app.use(session({
    secret: 'mySession',
    resave: false,//session data가 변경되지 않더라도 세션을 다시 저장할지 여부(default: true)
    saveUninitialized: true, //session data가 초기화 되지 않은 상태에서도 session을 저장할지 여부,
    //초기화 되지 않는 session data? session을 시작한 후 data를 저장하지 않는 상태.
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000,
    }
}))

//router 분리
const router = require('./routes/main');
app.use('/', router);

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

//db싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(default) 테이블이 존재하는 패쓰, 없으면 생성
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
