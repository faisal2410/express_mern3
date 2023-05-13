const express = require('express');
let router = express.Router();
const { most_popular,test } = require("../controllers/index");

router.get("/", test )

router.get("/most_popular", most_popular);

module.exports = router;