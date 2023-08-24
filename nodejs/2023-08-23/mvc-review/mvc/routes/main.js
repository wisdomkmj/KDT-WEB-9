const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get("/", controller.main); //Cmain 참고

//전체목록보기
router.get("/comments", controller.comm); //Cmain 참고

//상세보기
router.get("/comment/:name", controller.comment);

module.exports = router;
