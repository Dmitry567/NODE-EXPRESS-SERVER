const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,// WE USE THAT IF WE DO NOT WANT SEE PASSWORD IN OUR RESPONSE BODY
  }
});


module.exports =  mongoose.model("User", userSchema);