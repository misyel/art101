/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 10/25/2022
 * License: Public Domain
 */

const addOne = (x) => {
    return x + 1;
}

// Test addOne function
console.log("add 1 to 2: ", addOne(2));
console.log("add 1 to 1: ", addOne(1));

// Create numbers array
const numbers = [1, 2, 3, 4, 5];
console.log("numbers: ", numbers);

// Add one to all numbers
const numbersWithOne = numbers.map(addOne);
console.log("numbers after adding one: ", numbersWithOne);

// Anon function to add 10
const numbersWithTen = numbers.map((x) => {
    return x + 10;
})
console.log("numbers after adding ten: ", numbersWithTen);

const output = document.getElementById("output");
output.innerHTML = `original numbers: ${numbers} <br> after adding 1: ${numbersWithOne} <br> after adding 10: ${numbersWithTen}`; 

