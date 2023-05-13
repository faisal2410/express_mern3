const movies = require("../data/movies");
const people = require("../data/people");


exports.search_movie = (req, res, next) => {
    const searchTerm = req.query.query;
    const results = movies.filter(movie => {
        let found = movie.overview.includes(searchTerm) || movie.title.includes(searchTerm);

        return found;
    })

    res.json({ results });
}

exports.search_person = (req, res, next) => {

    const searchTerm = req.query.query;
    const results = people.filter(person => {
        let found = person.name.includes(searchTerm);

        return found;
    })

    res.json({ results });
}