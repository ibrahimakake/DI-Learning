/*Exercise 1 : Is_Blank

Instructions

Write a program to check whether a string is blank or not.

console.log(isBlank('')); --> true
console.log(isBlank('abc')); --> false
 */

function isBlank(params){
    return params.trim() === ""
}

console.log(isBlank(""))
console.log(isBlank("abc"))

/*Exercise 2 : Abbrev_name

Instructions

Write a JavaScript function to convert a string into an abbreviated form.

console.log(abbrevName("Robin Singh")); --> "Robin S."


 */

function abbrevName(name) {
    const nameParts = name.split(" ");
    if (nameParts.length >= 2) {
        const firstName = nameParts[0];
        const lastNameInitial = nameParts[1].charAt(0).toUpperCase();
        return `${firstName} ${lastNameInitial}.`;
    } else {
        return name;
    }
}

console.log(abbrevName("Robin Singh")); 

/*Exercise 3 : SwapCase

Instructions

Write a JavaScript function which takes a string as an argument and swaps the case of each character. 
For example :

if you input 'The Quick Brown Fox' 
the output should be 'tHE qUICK bROWN fOX'. */

function swapCase(str) {
    let swappedStr = '';
    
    for (const char of str) {
        if (char === char.toLowerCase()) {
            swappedStr += char.toUpperCase();
        } else {
            swappedStr += char.toLowerCase();
        }
    }
    
    return swappedStr;
}

console.log(swapCase('The Quick Brown Fox')); // "tHE qUICK bROWN fOX"


/*Exercise 4 : Omnipresent Value

Instructions

Create a function that determines whether an argument is omnipresent for a given array.
A value is omnipresent if it exists in every subarray inside the main array.
To illustrate:

[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
Examples

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false */

function isOmnipresent(arr, value) {
    for (const subArray of arr) {
        if (!subArray.includes(value)) {
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false

