/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 10/29/2022
 * License: Public Domain
 */

// Get output div
const outputEl = document.getElementById("output");

// Create p tag
const new1El = document.createElement("p");
new1El.innerHTML = "hello, I made this with javascript!";

// Create p tag
const new2El = document.createElement("p");
new2El.innerHTML = "hello, I also made this with javascript!";

// Add to DOM
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change style
new1El.style.color = "red";
new2El.style.color = "black";

// Create p tag
const new3El = document.createElement("p");
new3El.innerHTML = "hello, I added this first with javascript!";

// Add to DOM
outputEl.insertBefore(new3El, outputEl.firstChild);

// Change style
new3El.style.color = "green";