const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//로그인
router.post("/register", controlle)
//회원가입

module.exports = router;
