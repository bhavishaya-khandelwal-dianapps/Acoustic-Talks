const mongoose = require("mongoose");
const COMMON_CONSTANTS = require("../common/constants.js");


const roomSchema = new mongoose.Schema(
    {
        [COMMON_CONSTANTS.ROOM_NAME] : {
            type : String, 
            trim : true, 
            unique : true, 
            uppercase : true,
            required : true 
        },
    }
);


const Room = new mongoose.model("Room", roomSchema);



module.exports = Room;