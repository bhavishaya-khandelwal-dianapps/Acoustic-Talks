const jwt = require("jsonwebtoken");
const COMMON_CONSTANTS = require("../common/constants");
const User = require("../models/user.model.js");


const auth = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        console.log("req.cookie =", req.cookies.token);
        console.log("my TOKEN =", token);
        
        if(!token) {
            return res.status(400).send({
                message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
                status : true, 
                data : "Please login again"
            });
        }

        let verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        if(!verifyToken) {
            return res.status(400).send({
                message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS,
                status : true, 
                data : "Please login again"
            });
        }

        let user = await User.findOne({ email : verifyToken.email });

        if(!user) {
            return res.status(400).send({
                message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
                status : true, 
                data : "Please login again"
            });
        }

        req["user"] = user; 
        req.token = token; 
        next();

    }
    catch(error) {
        return res.status(500).send({
            message : COMMON_CONSTANTS.API_EXECUTION_FAILED, 
            status : false, 
            data : error.message
        });
    }
};


module.exports = {
    auth
}