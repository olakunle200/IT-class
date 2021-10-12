const mongoose = require("mongoose");

  const { Schema } = mongoose;
  const assessmentSchema = new Schema({
      studId:{
          type:Schema.Types.ObjectId,
          ref:"Student",
          required:true
        },
        courseId:{
            type:Schema.Types.ObjectId,
            ref:"Course",
            required:true,
            unique:true
          },
        score:{
            type:Number,
            required:true        }
  

  })

  const Assessment = mongoose.model("Assessment", assessmentSchema );
  module.exports = Assessment ;
  