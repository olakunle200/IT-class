const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: "please enter email address",
        lowercase: true,
        unique:true
    },

    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }


})

const User = mongoose.model("User", userSchema);
module.exports = User;
