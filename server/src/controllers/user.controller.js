const validator = require("validator");
const userService = require("../services/user.service.js");
const COMMON_CONSTANTS = require("../common/constants.js");


//* This function is used to register a new user 
const register = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body;

        if(!firstName || !email || !phoneNumber || !password) return res.status(400).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
            status : true, 
            data : COMMON_CONSTANTS.ALL_FIELDS_ARE_REQ
        });

        //* Validate phone number 
        let phoneNumberRegex = /^[6-9]\d{9}$/;
        if(!phoneNumberRegex.test(phoneNumber)) return res.status(400).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
            status : true, 
            data : COMMON_CONSTANTS.INVALID_PHONE_NUMBER
        });

        //* Validate Email  
        if(!validator.isEmail(email)) return res.status(400).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS,
            status : true, 
            data : COMMON_CONSTANTS.INVALID_EMAIL
        });

        //* Validate Password 
        if(password.length < 8) return res.status(400).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
            status : true, 
            data : COMMON_CONSTANTS.PASSWORD_LENGTH_ISSUE,
        });

        const data = await userService.register(req.body);

        return res.status(201).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS,
            status : true, 
            data 
        });
    } 
    catch (error) {
        return res.status(500).send({
            message : COMMON_CONSTANTS.API_EXECUTION_FAILED, 
            status : false, 
            data : error.message 
        });
    }
}; 




//* This function is used to login 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) return apiResponse({ res, code : 400, message : [COMMON_CONSTANTS.ALL_FIELDS_ARE_REQ], status : false, data : "" });

        //* Validate Email  
        if(!validator.isEmail(email)) return res.status(400).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
            status : true, 
            data : COMMON_CONSTANTS.INVALID_CREDENTIALS 
        });

        //* Validate Password 
        if(password.length < 8) return res.status(400).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
            status : true,
            data : COMMON_CONSTANTS.INVALID_CREDENTIALS
        });

        const data = await userService.login(req.body);

        res.cookie("token", data.token, {
            httpOnly: true,  // Prevents client-side access (XSS protection)
            sameSite: "Strict",  // Prevents CSRF attacks
            encode: String,  // Store the token as a raw string (prevents URL encoding)
        });
          

        return res.status(201).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS,
            status : true, 
            data 
        });

    } 
    catch (error) {
        return res.status(500).send({
            message : COMMON_CONSTANTS.API_EXECUTION_FAILED, 
            status : false, 
            data : error.message
        });
    }
};



//* This function is used to list all the users 
const listAllUsers = async (req, res) => {
    try {
        const data = await userService.listAllUsers();

        return res.status(200).send({
            message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
            status : true, 
            data
        }); 
    } 
    catch (error) {
        return res.status(500).send({
            message : COMMON_CONSTANTS.API_EXECUTION_FAILED, 
            status : false, 
            data : error.message
        });
    }
};


module.exports = {
    register,
    login,
    listAllUsers
}