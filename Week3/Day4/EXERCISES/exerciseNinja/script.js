/*Exercise 1 : Age Difference

Instruction

Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY


*/

const userAnswer = prompt('What is your birthdate ?')

const answer = parseInt(userAnswer)

const currentDate = new Date();
const year = currentDate.getFullYear();
const userAge = year - answer
const halfUserAge = userAge/2
const yougAge = answer + halfUserAge
alert (`the age of the younger is ${yougAge.toFixed()}`)




/*


Exercise 2 : Zip Codes

Instruction

Harder exercise
Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

While working in a Post Office you must have the clients’ zip code in order to send them their letters.
Ask the client for their zip code and console.log “success” or “error” based on the following rules.
Zip codes consists of 5 numbers
Must only contain numbers
Must not contain any whitespace (spaces)
Must not be greater than 5 digits in length


*/


const userZipCode = prompt('Please enter your zip code:');
const zipCode = userZipCode.trim(); // Remove leading and trailing whitespace

if (zipCode.length !== 5) {
  console.log('error');
} else if (!/^\d+$/.test(zipCode)) {
  console.log('error');
} else {
  console.log('success');
}



const userZipCode2 = prompt('Please enter your zip code:');
const zipCode2 = userZipCode.trim(); // Remove leading and trailing whitespace

const zipCodeRegex = /^\d{5}$/;

if (zipCodeRegex.test(zipCode)) {
  console.log('success');
} else {
  console.log('error');
}

/*



Exercise 3 : Secret Word

Instruction

Harder exercise
Hint : Use Regular Expressions

Prompt the user for a word and save it to a variable.
Delete all the vowels of the word and console.log the result.
Bonus: Replace the vowels with another character and console.log the result
a = 1
e = 2
i = 3
o = 4
u = 5 */

const userAnswer3 = prompt("Enter any word ") 

const vowelRegex = /[aeiuo]/gi;

const result = userAnswer3.replace(vowelRegex, '')

alert(`The wordwithout any vowel is : ${result}`)

const vowelMap = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  

const result2 = userAnswer3.replace(vowelRegex, (match) => vowelMap[match])

alert(`The wordwithout any vowel is : ${result2}`)



