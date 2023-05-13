const express = require('express');
const helmet = require('helmet');
const app = express();
require('dotenv').config();
const indexRouter = require("./routes/index");
const movieRouter = require("./routes/movie");
const searchRouter = require("./routes/search");
const { apiKey } = require("./middlewares/index");


const port = process.env.PORT||3000;
// console.log("=========>",port);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use(apiKey);

app.use("/", indexRouter);
app.use("/movie", movieRouter);
app.use("/search", searchRouter);


app.listen(port, () => {
    console.log("The server is running successfully");
})