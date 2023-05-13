const express = require('express');
let router = express.Router();
const { search_movie, search_person } = require("../controllers/search");
const { queryRequired } = require("../middlewares/search");


router.use(queryRequired)


router.get("/movie", search_movie);
router.get("/person", search_person);



module.exports = router;