const Movie = require("../Model/movieModel");

exports.addmovie = async (req, res) => {
    try {
        const { name, director, releaseYear, rating } = req.body;

        if (!name || !director || !releaseYear || !rating) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const extmovie = await Movie.findOne({ name });

        if (extmovie) {
            return res.status(401).json({
                message: "Movie Already existed"
            });
        }

        const newmovie = await Movie.create({
            name,
            director,
            releaseYear,
            rating
        });

        return res.status(201).json({
            message: "Movie added successfully",
            newmovie
        });

    } catch (error) {
        console.error("Error: ", error);

        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

exports.getmovie = async (req,res)=>{
   try {
     const id = req.params.id
     const movie = await Movie.findById(id)
     if(!movie){
        return res.status(404).json({message: "movie not found"})
     }
     return res.status(200).json({message: "Movie found Successfully", movie})
   } catch (error) {
    console.error(error);
    return res.status(500).json({message: "Something went wrong"})
   }


}

exports.updatemovie = async (req, res)=>{
    try {
        const id = req.params.id;
        const {name, director, releaseYear, rating} = req.body
        const movie = await Movie.findByIdAndUpdate(id, {
            name,
            director,
            releaseYear,
            rating
        }, {new: true, runValidators: true})
        if(!movie){
            return res.status(404).json({message: "Movie does not exist"})
        }
        return res.status(201).json({message: "Movie updated successfully", Movie: movie})
    } catch (error) {
        console.error("Error: " , error);

        return res.status(500).json({message: "Something went wrong"})
    }
}


exports.deletemovie = async (req,res)=>{
    try {
        const id = req.params.id;
        const movie = await Movie.findByIdAndDelete(id)
           if(!movie){
            return res.status(404).json({message: "Movie does not found"})
        }
        return res.status(201).json({message: "Movie deleted successfully", movie})
    } catch (error) {
          console.error("Error: " , error);
        return res.status(500).json({message: "Something went wrong"})
        
    }
}