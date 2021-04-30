const express = require('express');
const userRouter = express.Router();
const { getUser, registerUser } = require('../controllers/user.controller');

userRouter.route("")
.get(getUser)
.post(registerUser)

userRouter.route("/:id")
.get(getUser)

module.exports = userRouter;