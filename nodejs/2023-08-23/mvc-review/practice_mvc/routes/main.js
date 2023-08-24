const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

//회원목록
router.get("/members", controller.mems);

//회원정보
// router.post("/member/:name", controller.mem)
router.post("/member", controller.mem)

module.exports = router;
