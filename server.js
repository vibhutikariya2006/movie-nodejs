const express = require("express")
const app = express()
const {env} = require("./src/Config/env")
const {connectDatabase} = require("./src/Db/db")

const movieRoutes = require("./src/Routes/movieRoutes")
app.use(express.json())

connectDatabase()
app.use("/movie", movieRoutes)
app.listen(env.PORT, ()=>{
    console.log("Server is working", env.PORT);
    
})