/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 11/5/2022
 * License: Public Domain
 */

// Get output divs
const challenges = document.getElementById("challenges");
const output = document.getElementById("output");

// Create Buttons
const challengeButton = document.createElement('button');
const outputButton = document.createElement('button');
const bonusButton = document.createElement('button');
challengeButton.id = "challengeButton";
challengeButton.innerHTML = "click me to change the background!";
outputButton.id = "outputButton";
outputButton.innerHTML = "click me for a surprise!";
bonusButton.id = "bonusButton";
bonusButton.innerHTML = "click me to the button's color!"
challenges.appendChild(challengeButton);
output.appendChild(outputButton);
output.appendChild(bonusButton);

$("#challengeButton").click(() => {
    challenges.classList.add("special");
});

$("#outputButton").click(() => {
    output.innerHTML += "🐈";
});

let click = false;
$("#bonusButton").click(() => {
    challengeButton.style.backgroundColor = click ? "rgb(150, 126, 118)" : "rgb(170, 139, 86)" ;
    click = !click;
});
