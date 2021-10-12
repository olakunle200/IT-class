const mongoose = require("mongoose");

  const { Schema } = mongoose;
  const courseSchema = new Schema({
      course_code:{
          type:String,
          required:true
        },
     course_title:{
            type:String,
            required:true,
            unique:true
          },
    credit_load:{
            type: Number,
            required:true,
            
          }
  
  

  })

  const Course = mongoose.model("Course", courseSchema);
  module.exports = Course;
  