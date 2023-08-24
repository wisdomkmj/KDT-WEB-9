const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원가입
router.get("/signup", controller.signup); //회원가입 페이지열기
router.post("/signup", controller.post_signup); //DB에 회원정보 저장
//로그인
router.get("/signin", controller.signin); //로그인 페이지열기
router.post("/signin", controller.post_signin); //로그인 하기 

//회원정보수정 기능
//회원정보조회 => get
//회원정보수정 => patch

module.exports = router;