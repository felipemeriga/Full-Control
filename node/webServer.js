var express = require('express');
var cors = require('cors');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
//var Pwd = require('raspi-pwm')

var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var MOTOR = new Gpio(17, 'out'); //use GPIO pin 4, and specify that it is output

//var MOTORCONTROL = new Pwd('P1-12');

var app = express();
var fs = require("fs");

app.use(cors())

app.get('/listUsers', function (req, res) {
    fs.readFile("users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get('/motor', function (req, res) {
    if (MOTOR.readSync() === 0) { //check the pin state, if the state is 0 (or off)
        MOTOR.writeSync(1); //set pin state to 1 (turn MOTOR on)
    } else {
        MOTOR.writeSync(0); //set pin state to 0 (turn MOTOR off)
    }
    res.json({msg: MOTOR.readSync()})
})

/*app.get('/motorcontrol', function (req, res) {
    MOTORCONTROL.write(0.5);
    res.json({msg: "foi"})
})*/

app.get('/lampada', function (req, res) {
    if (LED.readSync() === 1) { //check the pin state, if the state is 1 (or off)
        LED.writeSync(0); //set pin state to 0 (turn LED on)
    } else {
        LED.writeSync(1); //set pin state to 1 (turn LED off)
    }
    res.json({msg: LED.readSync()})
})

app.get('/motor', function (req, res) {
    if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
        LED.writeSync(1); //set pin state to 1 (turn LED on)
    } else {
        LED.writeSync(0); //set pin state to 0 (turn LED off)
    }
    res.json({msg: 'This is working!'})
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