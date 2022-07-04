const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static("server"));
app.use(express.static("client"));

const products = [
    {
        id: 1,
        name: 'red baloon',
        price: 10,
    },
    {
        id: 2,
        name: 'blue baloon',
        price: 20,
    },
]



// ========================================= routes
app.get("/sendtext", (req, res) => {
    res
    .send("server is running!")
    .end();
})
app.get("/wall", (req, res) => {
    // const file = `${__dirname}/../client/pages/game__dragDrop.html`;
    const file = path.join(`${__dirname}/../client/images/background.png`);
    res.sendFile(file);
})
app.get("/products", (req,res) => {
    res.json(products);
})





const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
})