var express = require('express');
var cors = require('cors');
var mac = require('./mock-amp-converter');
var ma = require('./monitor-api');

var app = express();
var fs = require("fs");

const REFRESH = 5;
var flagMonitor = true;


app.use(cors())

app.get('/energy-use', function(req, res) {
    var b = mac.getBitValue();
    var kw = ma.getKiloWatt(b);

    res.json({ msg: kw });
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})