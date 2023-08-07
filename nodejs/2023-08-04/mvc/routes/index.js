const express = require("express");
const router = express.Router();
const controller = require("../controller/CComment.js");

// 아래 세개 경로 녀석들 app.get ->> router.get 으로 변경 ㄱ
// router
router.get("/", controller.main );   // app.use로 해도 된다. 미들웨어라서.
// (req, res) => {res.render("index");} 얘네 삭제


//GET /comments
router.get("/comments", controller.comments); // /comments 페이지 ㄱㄱ  // /comments <<- ejs파일 데려오기
 //commentInfos:comments = key:value <<-객체 녀석, 위에 comments 변수 
// (req, res) => { res.render('/comments', {commentInfos: comments}); });

//GET /comment/:id
router.get("/comment/:id", controller.comment); //, (req, res) => {
    // console.log(req.params);
//     // console.log(req.params.id);
//     const commentId = req.params.id;
//     console.log(comments[commentId -1 ]);
//     res.render("comment", {commentInfo: comments[commentId - 1]});
// });

// 얘내를 외부에서 사용해야 하므로.. <<- mvc 폴더의 메인 index.js 에서 사용하려면
module.exports = router;