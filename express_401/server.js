const express = require('express');
const helmet = require('helmet');
const app = express();
require('dotenv').config()
const indexRouter = require("./routes/index");
const movieRouter = require("./routes/movie");
const searchRouter = require("./routes/search");

const port = process.env.PORT||8000;
// console.log(port);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use((req, res, next) => {
    if (req.query.api_key != "12345") {
        res.status(401);
        res.json({
            msg:"Invalid API key"
        })
    } else {        
        next();
    }
})

app.use("/", indexRouter);
app.use("/movie", movieRouter);
app.use("/search", searchRouter);







app.listen(port, () => {
    console.log("The server is running successfully");
})