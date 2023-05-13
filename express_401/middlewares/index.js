exports.apiKey = (req, res, next) => {
    if (req.query.api_key != "12345") {
        res.status(401);
        res.json({
            msg: "Invalid API key"
        })
    } else {
        next();
    }
}