const User = require("../models/user.model");
const bcrypt = require("bcrypt"); 
const ErrorResponse = require("../utils/errorResponce");

const getUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    if(userId) {
      const user = await User.findById(userId);
      if(!user) {
        return res.send("No user found")
      }
      return res.send(user);
    } else {
      const allUsers = await User.find({}, 'userName emailId');
      return res.send(allUsers);
    }
  } catch (err) {
    next(err);
  }
}

const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ emailId: email })
    if (existingUser) { 
      return res.send(`User already exist with email ${email}`)
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      userName: username,
      emailId: email,
      password: hashPassword,
    });
    res.send(newUser);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getUser,
  registerUser
}