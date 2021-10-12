const express  =  require ("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.get("/page", authController.getloginpage);
router.post("/page", authController.postloginpage);
router.get("/signup", authController.getsignUpPage);
router.post("/signup", authController.postsignUpPage);


module.exports = router;
