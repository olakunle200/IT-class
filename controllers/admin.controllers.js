const { model } = require("mongoose");

const Student = require("../models/student");
const Course = require("../models/courses");
const Assessment = require("../models/assessment");
const getGp = require("../middlewares/getGrade");


module.exports = {
    getAddStudent: (req, res)=>{
        res.render("form_addstudent");
    },

    postAddStudent: (req, res)=>{
        const name = req.body.name;
        const mat_no = req.body.mat_no;
        console.log(name, mat_no);

        const student = new Student({
            name: name,
            mat_no: mat_no,
        });
        student.save().then((result) => {
            console.log("Student Created");
            res.redirect("/student");
        })
        .catch((err) => {
            console.log(err, "postAddStudent");
        });
    },

    getAddcourses: (req, res)=>{
        res.render("form_addcourses");
    },

    postAddCourses: (req, res)=>{
        const course_code = req.body.course_code;
        const course_title = req.body.course_title;
        const credit_load = req.body.credit_load;
        console.log(course_code, course_title, credit_load);

        const course = new Course({
            course_code: course_code,
            course_title: course_title,
            credit_load: credit_load
        });
        course.save().then((result) => {
            console.log("Courses Created");
            res.redirect("/adminDB/viewCourses");
        })
        .catch((err) => {
            console.log(err, "postAddCourses");
        });
    },

    getAddassessment:(req, res)=>{
        res.render("form_addassessment")
    },
    
    postAddassessment: (req, res)=>{
        console.log("request body: ", req.body);
        const mat_no = req.body.mat_no;
        const course_code = req.body.course_code;
        const scores = req.body.scores;
        console.log(mat_no, course_code, scores);

        console.log(getGp(scores));

        const assessment = new Assessment({
            mat_no: mat_no,
            course_code: course_code,
            scores: scores,
        });
        assessment.save().then((result) => {
            console.log("Assessment added");
            res.redirect("/slogin");
        })
        .catch((err) => {
            console.log(err, "postAddassessment");
        });
    },
    // admin dashboard

    getAdminDashBoard: (req, res)=>{
        res.render("adminDB");
    },

    getAllCourses: (req, res)=>{
        Course.find()
        .then((courses) => {
            res.render("coursesTable", { courseAll: courses });
        })
        .catch((err) => {
            console.log(err, 'studentList');
        })
        
    },
    
    geteditCourses: async (req, res)=>{
        const CId = req.params.id;
        const course = await Course.findById(CId);
        res.render("editCourses", { course });
    },
    posteditCourses: async (req, res)=>{
        const CId = req.body.CId;
        const updated_course_code = req.body.course_code;
        const updated_course_title = req.body.course_title;
        const updated_credit_load = req.body.credit_load;

        const course = await Course.findById(CId);

        course.course_code = updated_course_code;
        course.course_title = updated_course_title;
        course.credit_load = updated_credit_load;

        course.save();
        res.redirect("/adminDB/viewCourses");
    },

    geteditStudents: async(req, res)=>{
        const Std = req.params.id;
        const student = await Student.findById(Std);
        res.render("editStudents", {student});
    },
    posteditStudents: async (req, res)=>{
        const Std = req.body.Std;
        const updated_name= req.body.name;
        const updated_mat_no = req.body.mat_no;
        

        const student = await Student.findById(Std);

        student.name = updated_name;
        student.mat_no = updated_mat_no;
        

        student.save();
        res.redirect("/student");
    }

 
}

   