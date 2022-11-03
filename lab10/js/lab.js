/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 11/1/2022
 * License: Public Domain
 */

 const sortUserName = (userName) => {
    const nameArray = userName.split('');
    console.log("nameArray = ", nameArray);

    const nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);

    const nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);

    return nameSorted;
}

// Get output div
const outputEl = document.getElementById("output");

// Add event listener to button
const button = document.getElementById("my-button");
button.addEventListener("click", () => {
    const input = document.getElementById("user-name");
    const sortedInput = sortUserName(input.value);

    // Put output in div
    const p = document.createElement("p");
    p.innerHTML = sortedInput;
    outputEl.appendChild(p);
});