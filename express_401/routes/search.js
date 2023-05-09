const express = require('express');
let router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        title: "Search"
    })
})

module.exports = router;