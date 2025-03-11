const COMMON_CONSTANTS = require("../common/constants.js");
const Message = require("../models/msg.model.js");


const addMessage = async (toUserId, fromUserId, body) => {
    let msg = await Message.create({
        [COMMON_CONSTANTS.TO_USER_ID] : toUserId,
        [COMMON_CONSTANTS.FROM_USER_ID] : fromUserId,
        [COMMON_CONSTANTS.MESSAGE] : body.message
    });
    if(!msg) throw new Error("Message not added");
    return msg;
};


module.exports = {
    addMessage
}