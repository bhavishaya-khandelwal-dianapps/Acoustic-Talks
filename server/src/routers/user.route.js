const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller.js");
const userAuth = require("../middleware/user.auth.js");


userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/list", userAuth.auth, userController.listAllUsers);


module.exports = userRouter;