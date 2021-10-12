const Course = require("../models/courses");
const Student = require("../models/student");
const Assessment = require("../models/assessment");
// const getGrade = require("../middlewares/getGrade");
const getGrade = require("../middlewares/getGrade");


module.exports ={
    studentList:(req,res)=>{
        Student.find()
        .then((student) => {
            res.render("student_layout", { stud: student });
        })
        .catch((err) => {
            console.log(err, 'studentList');
        })
    },

    getStudentView: async(req, res, next) => {
        try{
        const fetchedId = req.params.id;
        console.log(fetchedId);
        const studId = await Student.find({ _id: fetchedId })

        const assessId = await Assessment.find({studId: fetchedId}).select(' courseId score -_id')
        .populate('courseId', '-_id course_code course_title');


        let gradeArray = []
        for (let i of assessId) {
            // console.log(i);
            // console.log(i.score);
            // console.log(getGp(i.score));
            gradeArray.push(getGrade(i.score));
        }
        console.log(gradeArray);

        for (let grade of gradeArray) {
            console.log(grade);
        }


        // console.log('AccessId: ', assessment.score);


        const courses = await Course.find()

            res.render('view_student', { studId, courses, assessment:assessId, gradeArray });
        }catch(err){
            console.log(err, 'studentView')
        }
    },

    

    postStudentView: async (req, res) => {
        console.log('req.body: ', req.body);

        try{
        const studId = req.params.id;
        const course_code = req.body.course;
        const score = req.body.score;

        const assessment = new Assessment({
            studId: studId,
            courseId: course_code,
            score: score
        });
        await assessment.save()
        console.log('Assessment was saved successfully');
        res.redirect(`/student/view_student/${studId}`)
        }catch(err) {
            console.log(err, 'postStudentView')
        }
    }

}