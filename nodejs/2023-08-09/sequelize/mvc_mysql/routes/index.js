const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router(); // 관례상 변수명 router.

router.get("/", controller.main);
router.get("/visitor", controller.getVisitors);s

module.exports = router;