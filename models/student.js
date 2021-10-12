const mongoose = require("mongoose");

  const { Schema } = mongoose;
  const studentSchema = new Schema({
      name:{
          type:String,
          required:true
        },
        mat_no:{
            type:String,
            required:true,
            unique:true
          },
  })

  const Student = mongoose.model("Student", studentSchema);
  module.exports = Student
