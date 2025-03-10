const COMMON_CONSTANTS = require("../common/constants.js");
const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");


const register = async (body) => {
    let user = await User.create(body);
    if(!user) throw new Error("User registration failed"); 
    return user; 
};


const login = async (body) => {
    let user = await User.findOne({
        email : body.email
    });
    if(!user) throw new Error("User not found");

    if(user.password !== body.password) throw new Error([COMMON_CONSTANTS.INVALID_CREDENTIALS]);

    let PAYLOAD = {
        id : user._id,
        email : body.email 
    };

    let token = jwt.sign(PAYLOAD, process.env.SECRET_KEY);

    return { user, token };
};


const listAllUsers = async () => {
    const data = await User.find().select({
        firstName : 1, 
        lastName : 1,
        email : 1
    });
    if(!data) throw new Error("No user found");
    return data;
}


module.exports = {
    register,
    login,
    listAllUsers
}