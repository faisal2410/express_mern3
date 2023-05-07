const express = require('express');
const app = express();

app.use(express.static("public"));

// function validateUser(req, res, next) {
//     res.locals.validated = true;
//     console.log("1","Validate Ran");
//     next();
// }


// app.use("/", validateUser);

// function validateUser(req, res, next) {
//     res.locals.validated = true;
//     console.log("Validated Ran");
//     next();
// }

// app.use("/admin",validateUser);


// app.get("/", (req, res, next) => {
//     res.send("<h1>Main Page</h1>")
//     console.log("2", res.locals.validated);
// })

// app.get("/admin", (req, res, next) => {
//     res.send("<h1>Admin Page</h1>")
//     console.log(res.locals.validated)
// })


// Example 3

app.get("/", (req, res) => {
    // res.cookie("country", "bangladesh");
    // res.send("<h1>Country  Page</h1>")
    res.redirect("/welcome");
});

app.get("/welcome", (req, res) => {
    res.json({
        "city": "Sylhet",
        "class":5
   })
})




app.listen(8000, () => {
    console.log("The server is running successfully ");
})