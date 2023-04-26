const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    date:String,
    department:String,
    doctor:String,
    message:String
});

const User = mongoose.model("USER",userSchema);

module.exports = User;