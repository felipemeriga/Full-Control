var express = require('express');
var manager = require('./manager/blink');

var app = express();
var fs = require("fs");

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/listUsers', function (req, res) {
    fs.readFile("users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get('/lampada', function (req, res) {
    manager.setInterval;
})

app.get('/home', function (req, res) {

    fs.readFile(__dirname + "/" + "smart_shower_index.html", 'utf8', function (err, data) {
        res.send(data);

    })
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})