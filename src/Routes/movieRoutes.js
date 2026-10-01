const express = require("express")

const {addmovie, getmovie, updatemovie, deletemovie} = require("../Controller/movieController")

const router = express.Router()

router.post("/addmovie", addmovie)
router.get("/getmovie/:id", getmovie)
router.put("/updatemovie/:id", updatemovie)
router.delete("/deletemovie/:id", deletemovie)

module.exports = router