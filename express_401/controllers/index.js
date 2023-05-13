const movies = require("../data/movies");

exports.most_popular = (req, res, next) => {
    let page = req.query.page;
    if (page == undefined) {
        page = 1;
    }

    let results = movies.filter(movie => {
        // return movie.most_popular==false;
        return movie.adult == false;
    })

    const indexToStart = (page - 1) * 20;
    results = results.slice(indexToStart, indexToStart + 19);
    // console.log(results.length);

    res.json({
        page,
        results
    });
}

exports.test = (req, res, next) => {
    res.json({
        title: "Express"
    })
}