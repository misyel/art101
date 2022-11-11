/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 11/11/2022
 * License: Public Domain
 */

const fizzBuzz = (max) => {
    const nums = {};
    for (let i = 1; i <= max; i++) {
        let finalStr = "";
        if (i % 3 === 0) {
            console.log("Fizz!");
            finalStr += "Fizz";
        }
        if (i % 5 === 0) {
            console.log("Buzz!");
            finalStr += "Buzz";
        } 
        if (i % 7 === 0) {
            console.log("Boom!");
            finalStr += "Boom";
        }
        if (finalStr) {
            nums[i] = finalStr + "!";
        }
    }
    return nums;
};

const output = document.getElementById("output");
$("#button").click(() => {
    output.innerHTML = "";
    const input = document.getElementById("input");
    const max = input.value;

    const nums = fizzBuzz(max);
    for (let key in nums) {
        if (nums[key]) {
            const p = document.createElement("p");
            p.innerHTML = `${key}: ${nums[key]}`;
            output.appendChild(p);
        }
    }
});