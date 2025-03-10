const COMMON_CONSTANTS = {
    
    //* API related constants 
    API_EXECUTION_SUCCESS : "API executed successfully",
    API_EXECUTION_FAILED : "API execution failed",

    //* Error related constants 
    SOMETHING_WENT_WRONG : "Something went wrong", 
    INVALID_CREDENTIALS : "Invalid credentials",
    ALL_FIELDS_ARE_REQ : "All fields are required",
    INVALID_PHONE_NUMBER : "Please provide valid phone number",
    INVALID_EMAIL : "Please provide correct email address",
    PASSWORD_LENGTH_ISSUE : "Password can't be less than 8 characters",

    //* Message Model keys  
    TO_USER_ID : "toUserId",
    FROM_USER_ID : "fromUserId", 
    MESSAGE : "message", 

    //* Room Model keys  
    ROOM_ID : "roomId", 
    ROOM_NAME : "roomName", 

    //* User Model keys  
    USER_ID : "userId", 
    FIRST_NAME : "firstName", 
    LAST_NAME : "lastName", 
    EMAIL : "email", 
    PHONE_NUMBER : "phoneNumber", 
    PASSWORD : "password" 
    
};


module.exports = COMMON_CONSTANTS;