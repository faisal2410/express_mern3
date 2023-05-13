exports.queryRequired = (req, res, next) => {
    const searchTerm = req.query.query;
    if (!searchTerm) {
        res.json({
            msg: "Query is required"
        })
    } else {
        next();
    }
}