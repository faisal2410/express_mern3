const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());







app.listen(8000, () => {
    console.log("The server is running successfully");
})