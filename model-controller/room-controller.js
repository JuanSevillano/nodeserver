/**
 * Created by Juan David Sevillano  on 29/12/2017.
 * controller to communicate with arduino on room
 */
var five = require("johnny-five");



exports.turnLight = function() {

    five.Board().on("ready", function() {

        // Initialize the RGB LED
        var led = new five.Led.RGB({
            pins: {
                red: 10,
                green: 9,
                blue: 8
            }
        });
        // var led = new five.Led.RGB([3,5,6]);

        // Add led to REPL (optional)
        this.repl.inject({
            led: led
        });

        // Turn it on and set the initial color
        led.on();
        led.color("#FF0000");
        led.blink(1000);

    });

}; 
