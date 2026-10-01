const mongoose = require("mongoose");
const { env } = require("../Config/env");

exports.connectDatabase = async ()=>{
try {
    await mongoose
    .connect(env.MONGOOSE_URL)
    .then(()=>{console.log("Database Connected Successfully");
    })
    .catch(()=>{console.log("Database Connection Failed");
    })

} catch (error) {
    console.error("Error: " , error);
    
}
}