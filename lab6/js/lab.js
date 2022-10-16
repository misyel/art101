/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 10/16/2022
 * License: Public Domain
 */


// Declare Variables
const myTransport = ["Car", "Bus", "Walking"];
const myMainRide = {
    make: "Toyota",
    model: "Prius",
    color: "Gray",
    year: 2004,
    age: function() {
        return 2022 - age;
    }
};

// Output
document.writeln(`My main forms of transportation: ${myTransport}. <br>`);
document.writeln(`My main ride: ${JSON.stringify(myMainRide, null, 2)}`);
