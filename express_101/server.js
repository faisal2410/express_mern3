const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

const port = 8000;

// app.all("*", (req, res) => {
//     res.send("<h1>Hello Expressjs</h1>")
    
// });

// app.get("/", (req, res) => {   
//     res.sendFile(path.join(__dirname + "/node.html"));
// });
app.get("/", (req, res) => {   
//     console.log(path.join(__dirname + "/public/node.html"));
//     res.sendFile(path.join(__dirname + "/public/node.html"));
res.sendFile("D:/Faisal/ostad/ostad_mern_3/express_mern3/public/node.html");
});
// app.get("/", (req, res) => {
//     res.json({
//         "name": "Faisal ahmed",
//         "city":"Sylhet"
//     })
// });

// app.post("/", (req, res) => {
//     res.send("<h1>Hello Post page</h1>");
// });
// app.put("/", (req, res) => {
//     res.send("<h1>Hello Put page</h1>");
// });
// app.patch("/", (req, res) => {
//     res.send("<h1>Hello Patch page</h1>");
// });
// app.delete("/", (req, res) => {
//     res.send("<h1>Hello Delete page</h1>");
// });



app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});



