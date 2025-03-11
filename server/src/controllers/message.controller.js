const COMMON_CONSTANTS = require("../common/constants.js");
const msgService = require("../services/message.service.js");


//* This function is used to add message  
const addMessage = async (req, res) => {
    try {
        let toUserId = req.params.id;
        let fromUserId = (req.user._id).toString();

        if(!toUserId) {
            return res.status(400).send({
                message : COMMON_CONSTANTS.API_EXECUTION_SUCCESS, 
                status : true, 
                data : "Please provide correct user id"
            });
        }

        let data = await msgService.addMessage(toUserId, fromUserId, req.body);

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
            data : error 
        });
    }
}; 


module.exports = {
    addMessage
}