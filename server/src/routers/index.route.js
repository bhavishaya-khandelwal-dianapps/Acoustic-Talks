const express = require("express");
const router = express.Router();
const userRouter = require("./user.route.js");
const msgRouter = require("./message.route.js");


router.use("/user", userRouter);
router.use("/message", msgRouter);


module.exports = router;