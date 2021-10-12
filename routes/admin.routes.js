const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");


router.get("/addstudents", adminController.getAddStudent);

router.post("/addstudents", adminController.postAddStudent);

router.get("/addcourses", adminController.getAddcourses);

router.post("/addcourses", adminController.postAddCourses);

router.get("/viewCourses", adminController.getAllCourses);

router.get("/editStudents/:id", adminController.geteditStudents);

router.post("/editStudents", adminController.posteditStudents);

router.get("/editCourses/:id", adminController.geteditCourses);

router.post("/editCourses", adminController.posteditCourses);

router.get("/addassessment", adminController.getAddassessment);

router.post("/addassessment", adminController.postAddassessment);

router.get("/", adminController.getAdminDashBoard);






module.exports  = router;