// express 모듈 불러오기
const express = require("express");
const app = express();
const port = 8000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 임시 데이터
const comments = [
    {
        id: 1,
        userId: 'helloworld',
        date: '2023-08-01',
        comment: '안녕하세요'
    },{
        id: 2,
        userId: 'helloworld!',
        date: '2023-08-02',
        comment: '안녕하세요!'
    },{
        id: 3,
        userId: 'helloworld?!',
        date: '2023-08-03',
        comment: '안녕하세요?!'
    },{
        id: 4,
        userId: 'helloworld!!!',
        date: '2023-08-04',
        comment: '안녕하세요!!!!'
    }
];

// router
app.get("/", (req, res) => {
    res.render("index");
});

//GET /comments
app.get("/comments", (req, res) => { // /comments 페이지 ㄱㄱ
    res.render('/comments', {commentInfos: comments}); // /comments <<- ejs파일 데려오기
}); //commentInfos:comments = key:value <<-객체 녀석, 위에 comments 변수 

//GET /comment/:id
app.get("/comment/:id", (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId -1 ]);
    res.render("comment", {commentInfo: comments[commentId - 1]});
});

// 맨 마지막 선언
app.get("*", (req, res) => {
    res.render("404");
});

// server start
app.listen(port, () => {
    console.log(`http://localhost${port} SERVER START!`);
});;
