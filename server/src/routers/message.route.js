const express = require("express");
const msgRouter = express.Router();
const userAuth = require("../middleware/user.auth.js");
const msgController = require("../controllers/message.controller.js");


msgRouter.post("/add/:id", userAuth.auth, msgController.addMessage);


module.exports = msgRouter;