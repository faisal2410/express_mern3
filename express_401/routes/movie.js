const express = require('express');
let router = express.Router();
const { top_rated, movie_details, new_rating, remove_rating } = require("../controllers/movie");

const { requiredJSON } = require("../middlewares/movie");





router.get("/top_rated", top_rated);

router.get("/:movieId", movie_details);

router.post("/:movieId", requiredJSON, new_rating);

router.delete("/:movieId/rating", requiredJSON, remove_rating);



module.exports = router;