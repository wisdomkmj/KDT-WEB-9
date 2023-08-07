const express = require("express");
const router = express.Router();
const controller = require("../controller/connect");

router.use("/", controller.ma)