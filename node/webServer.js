var express = require('express'),
    cors = require('cors'),
    Gpio = require('onoff').Gpio, //include onoff to interact with the GPIO
    GpioPwm = require('pigpio').Gpio,
    fs = require("fs");

const vel = 25,
    max = 250,
    min = vel,
    med = 125;

var LED = new Gpio(4, 'out'), //use GPIO pin 4, and specify that it is output
    MOTORPWM = new GpioPwm(17, {mode: GpioPwm.OUTPUT}),
    MOTOR = new Gpio(17, 'out'),
    dutyCycle = 125,
    app = express();

//var MOTORCONTROL = new Pwd('P1-12');

app.use(cors())

app.get('/listUsers', function (req, res) {
    fs.readFile("users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get('/motor', function (req, res) {
    blinkMOTOR();
    console.log(MOTOR.readSync());
    if (MOTOR.readSync() === 1){
        MOTORPWM.pwmWrite(med);
        dutyCycle = med;
    }else{
        MOTORPWM.pwmWrite(0);
    }
    res.json({msg: MOTOR.readSync()})
})

app.get('/motorcontrolup', function (req, res) {
    console.log(MOTOR.readSync());
    if (MOTOR.readSync() === 1 && dutyCycle < max){
        MOTORPWM.pwmWrite(dutyCycle + vel);
        dutyCycle = dutyCycle + vel;
        console.log("dutyCycle " + dutyCycle);
        res.json({msg: MOTORPWM.getPwmDutyCycle()})
    }else{
        res.json({msg: "Motor is off!"})
    }
})

app.get('/motorcontroldown', function (req, res) {
    console.log(MOTOR.readSync());
    if (MOTOR.readSync() === 1 && dutyCycle > min){
        MOTORPWM.pwmWrite(dutyCycle - vel);
        dutyCycle = dutyCycle - vel;
        console.log("dutyCycle " + dutyCycle);
        res.json({msg: MOTORPWM.getPwmDutyCycle()})
    }else{
        res.json({msg: "Motor is off!"})
    }
})

app.get('/lampada', function (req, res) {
    blinkLED();  
    res.json({msg: LED.readSync()})
})

app.get('/home', function (req, res) {

    fs.readFile(__dirname + "/" + "smart_shower_index.html", 'utf8', function (err, data) {
        res.send(data);

    })
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    LED.writeSync(1);

    console.log("Example app listening at http://%s:%s", host, port);

})

function blinkLED() { //function to start blinking
    if (LED.readSync() === 1) { //check the pin state, if the state is 1 (or off)
        LED.writeSync(0); //set pin state to 0 (turn LED on)
    } else {
        LED.writeSync(1); //set pin state to 1 (turn LED off)
    }
}

function blinkMOTOR() { //function to start blinking
    if (MOTOR.readSync() === 0) { //check the pin state, if the state is 0 (or off)
        MOTOR.writeSync(1); //set pin state to 1 (turn LED on)
    } else {
        MOTOR.writeSync(0); //set pin state to 0 (turn LED off)
    }
}
  
function endBlink() { //function to stop blinking
    clearInterval(blinkInterval); // Stop blink intervals
    LED.writeSync(1); // Turn LED off
    LED.unexport(); // Unexport GPIO to free resources
}