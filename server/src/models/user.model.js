const mongoose = require("mongoose");
const validator = require("validator");
const COMMON_CONSTANTS = require("../common/constants.js");


const userSchema = new mongoose.Schema({
    [COMMON_CONSTANTS.FIRST_NAME] : {
        type : String, 
        required : true,
        trim : true
    },
    [COMMON_CONSTANTS.LAST_NAME] : {
        type : String,
        trim : true 
    },
    [COMMON_CONSTANTS.EMAIL] : {
        type : String, 
        trim : true, 
        unique : [true, "Email is already in use."], 
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Please provide correct email address");
            }
        }
    },
    [COMMON_CONSTANTS.PHONE_NUMBER] : {
        type : String,
        trim : true,  
        unique : [true, "Phone number is already in use."],
        validate(value) {
            let phoneNumberRegex = /^[6-9]\d{9}$/;
            if(!phoneNumberRegex.test(value)) throw new Error("Please provide correct phone number");
        }
    },
    [COMMON_CONSTANTS.PASSWORD] : {
        type : String, 
        trim : true,
        min : [8, "Minimum length of password must be 8."]
    }
});


const User = new mongoose.model("User", userSchema);


module.exports = User;