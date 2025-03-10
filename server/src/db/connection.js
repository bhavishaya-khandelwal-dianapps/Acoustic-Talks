const mongoose = require("mongoose");



mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log(`Connection successful, go ahead...`);
})
.catch((error) => {
    console.log(`Some error occur while connecting to mongoDB server and the error is ${error}`);
});