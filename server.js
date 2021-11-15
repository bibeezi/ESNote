const express = require("express");
const port = 3000 || process.env.port;

var app = express();

app.listen(port, () => {
    console.log ("Port is listening");
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});