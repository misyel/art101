/**
 * Author: Michelle Kwong (mkwong6@ucsc.edu)
 * Created: 10/24/2022
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

const userName = window.prompt("hi, please tell me your name so I can fix it");
console.log("userName = ", userName);

document.writeln(sortUserName(userName), "<br>");