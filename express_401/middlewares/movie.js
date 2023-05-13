exports.requiredJSON = (req, res, next) => {
    if (!req.is("application/json")) {
        res.json({ msg: "content type must be application/json" })
    } else {

        next();
    }
}