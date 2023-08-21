/*Exercise 1: Random Number

Instructions

Get a random number between 1 and 100.
Console.log all even numbers from 0 to the random number.
 */

const randomNumber = Math.floor(Math.random() * 100)  
console.log(` The Random number is ${randomNumber}`)
for (let i=0 ; i <= randomNumber ; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

/*Exercise 2: Capitalized Letters

Instructions

Create a function that takes a string as an argument.
Have the function return:
The string but all letters in even indexes should be capitalized.
The string but all letters in odd indexes should be capitalized.
Note:

Index 0 will be considered even.
The argument of the function should be a lowercase string with no spaces.
For example,

capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']


 */
  


function capitalize(userWord) {
    let correctWord = userWord.toLowerCase().trim();
    let evenCaps = '';
    let oddCaps = '';

    for (let i = 0; i < correctWord.length; i++) {
        if (i % 2 === 0) {
            evenCaps += correctWord[i].toUpperCase();
            oddCaps += correctWord[i];
        } else {
            evenCaps += correctWord[i];
            oddCaps += correctWord[i].toUpperCase();
        }
    }

    return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

/*Exercise 3 : Is Palindrome?

Instructions

Write a JavaScript function that checks whether a string is a palindrome or not.
Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
palindrome


 */
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string and compare with the original
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

/*Exercise 4 : Biggest Number

Instructions

Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
Note : This function should work with any array;
Example:

const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0 */

function biggestNumberInArray(arrayNumber) {
    let biggestNumber = 0;
    
    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > biggestNumber) {
            biggestNumber = arrayNumber[i];
        }
    }
    
    return `The biggest number is ${biggestNumber}`;
}

console.log(biggestNumberInArray([2, 3, 56, 78, 3, 5, 89]));

/*Exercise 5: Unique Elements

Instructions

Write a JS function that takes an array and returns a new array with only unique elements.

Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
*/

function newListReturner(array){
    let newList = []
    for( let i = 0; i<= array.length; i++ ){
        if(array[i]===array[i+1]){
            newList.push(array[i])
        }
      return newList
    }
}

console.log(newListReturner([1,2,2,3,4,4,5,5,5,6]))


