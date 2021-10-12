const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controllers");

router.get("/", studentController.studentList);

router.get("/view_student/:id", studentController.getStudentView);

router.post("/view_student/:id", studentController.postStudentView);

module.exports = router;