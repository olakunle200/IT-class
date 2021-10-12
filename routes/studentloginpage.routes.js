const express = require("express");
const router = express.Router();
const studentloginController = require("../controllers/studentlogin.controllers");


router.get("/", studentloginController.sLogin);


module.exports = router;