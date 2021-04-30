const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema({
  userName: { type: String, require: true },
  emailId: { type: String },
  password: { type: String },
  createdDate: { type: Date, default: Date.now},
  updatedDate: { type: Date, default: Date.now},
})

module.exports = mongoose.model('User', userModel);