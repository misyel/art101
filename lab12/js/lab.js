/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 11/5/2022
 * License: Public Domain
 */

const sortingHat = (str) => {
    const length = str.length;
    const rem = length % 4;
    const houses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"];
    return houses[rem];
}

const outputEl = document.getElementById("output");
$("#button").click(() => {
    const input = document.getElementById("input");
    const name = input.value;
    const house = sortingHat(name);

    // Put output in div
    const p = document.createElement("p");
    p.innerHTML = `the sorting hat has sorted you into ${house}`;
    outputEl.appendChild(p);
})