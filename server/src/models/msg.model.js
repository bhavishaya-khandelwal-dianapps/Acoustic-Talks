const mongoose = require("mongoose");
const COMMON_CONSTANTS = require("../common/constants.js");


const msgSchema = new mongoose.Schema(
    {
        [COMMON_CONSTANTS.TO_USER_ID] : {
            type : String,
            default : null
        },
        [COMMON_CONSTANTS.FROM_USER_ID] : {
            type : String
        },
        [COMMON_CONSTANTS.MESSAGE] : {
            type : String, 
            trim : true
        },
        [COMMON_CONSTANTS.ROOM_ID] : {
            type : String,
            default : null
        }
    },
    {
        timestamps : true  
    }
);


const Message = new mongoose.model("Message", msgSchema);


module.exports = Message;