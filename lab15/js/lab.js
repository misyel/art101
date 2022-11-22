/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 11/21/2022
 * License: Public Domain
 */

const output = document.getElementById("output");
const button = document.getElementById("activate");
button.addEventListener("click", async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokedex/kanto');
    const json = await data.json();
    output.innerHTML = JSON.stringify(json, null, 2);
});