const express = require('express');
let router = express.Router();
const movies = require("../data/movies");
// console.log(movies);
router.get("/", (req, res, next) => {
    res.json({
        title:"Express"
    })
})

router.get("/most_popular", (req, res, next) => { 
    let page = req.query.page;
    if (page == undefined) {
        page = 1;
    }
   
        let results = movies.filter(movie => {
            return movie.most_popular;
        })

        const indexToStart = (page - 1) * 20;
        results = results.slice(indexToStart, indexToStart + 19);
        // console.log(results.length);

        res.json({
            page,            
            results
        });
    
   


})

module.exports = router;