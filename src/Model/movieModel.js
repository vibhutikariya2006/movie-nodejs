const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Movie Name is required"]
    },
    director:{
        type: String,
        required:[true, "Director name is required"]
    },
    releaseYear:{
        type: String,
        required:[true, "releaseYear is required"]
    },
    rating:{
        type: String,
        required:[true, "Rating is required"]
    }
    
},{timestamps: true})

module.exports = mongoose.model("MOVIE", MovieSchema)