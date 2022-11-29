/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 11/21/2022
 * License: Public Domain
 */

const getData = async () => { 
    const data = await fetch('https://xkcd.com/614/info.0.json');
    const json = await data.json();
    console.log(json);

    const h1 = document.createElement('h1');
    const img = document.createElement('img');

    h1.innerHTML = json.title;
    img.src = json.img;
    img.alt = json.alt;

    const output = document.getElementById("output");
    output.appendChild(h1);
    output.appendChild(img);
}

getData();