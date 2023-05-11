const express = require('express');
let router = express.Router();
const movieDetails = require("../data/movieDetails");

// GET/movie/:movieId
// GET/movie/top_rated
// POST/movie/:movie_id/rating
// DELETE/movie/:movie_id/rating

const requiredJSON = (req, res, next) => {
    if (!req.is("application/json")) {
        res.json({ msg: "content type must be application/json" })
    } else {
       
        next();
    } 
}

router.get("/top_rated", (req, res, next) => {
    let page = req.query.page;
    if (!page) {
        page = 1;
    }
    let results = movieDetails.sort((a, b) => {
        return b.vote_average - a.vote_average;
    })
    const indexToStart = (page - 1) * 20
    res.json(results.slice(indexToStart, indexToStart + 19));
})


router.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId;
    const results = movieDetails.find(movie => {
        return movie.id == Number(movieId);
    });
    if (!results) {
        res.json({
            msg: "Movie Id is not found"
        });

    } else {

        res.json(results);
    }

});

router.post("/:movieId", requiredJSON, (req, res, next) => {
    const movieId = req.params.movieId;
    console.log(movieId);
    const userRating = req.body.value;
    if (userRating < 0.5 || userRating > 10) {
        res.json({
            msg: "Rating must be between 0.5 and 10"
        })
    } else {
        res.json({
            msg: "Thank you for submitting your rating",
            status:200
        })
    }   
    
})
router.delete("/:movieId/rating", requiredJSON, (req, res, next) => {
    const movieId = req.params.movieId;
    res.json({
        msg: "Rating Deleted"
    })
    
})

// router.get("/", (req, res, next) => {
//     res.json({
//         title: "Movie"
//     })
// })

module.exports = router;