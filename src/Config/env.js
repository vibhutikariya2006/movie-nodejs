const dotenv = require("dotenv")

dotenv.config()

exports.env ={
    PORT : process.env.PORT,
    MONGOOSE_URL : process.env.MONGOOSE_URL,
}