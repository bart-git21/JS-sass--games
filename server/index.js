const express = require("express");
const app = express();

app.use(express.static("server"));
app.use(express.static("client"));

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });


app.get("/", (req, res) => {
    const file = `${__dirname}/../client/index.html`;
    res.sendFile(file);
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
})