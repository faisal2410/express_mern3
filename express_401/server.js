const express = require('express');
const helmet = require('helmet');
const app = express();
const indexRouter = require("./routes/index");
const movieRouter = require("./routes/movie");
const searchRouter = require("./routes/search");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use("/", indexRouter);
app.use("/movie", movieRouter);
app.use("/search", searchRouter);







app.listen(8000, () => {
    console.log("The server is running successfully");
})