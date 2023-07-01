/*Exercise 1 : Faker Module

Install the faker module, and read the documentation.

Create an empty array called users. Tip: It’s an array of objects

Create a function that adds objects to the users array. Each user has the properties: name, address street and country. Use faker to populate them with fake data.

Bonus : Find a node module that allows to prompt the user for his name, address street and country in order to add this information into the users array.
const faker = require('faker');


let users = [];

let AddObject = () => {
    for (i = 0; i < 4; i++) {
        let objects = {
            'name': faker.name.firstName(),
            'address': faker.address.streetAddress(),
            'country': faker.address.country(),
        };
        users.push(objects);
        console.log(users)
    }
};

AddObject();
*/
/*Exercise 2 : Regular Expression #1

Use the regular expression module to extract numbers from a string
Example

returnNumbers('k5k3q2g5z6x9bn') 
// Excepted output : 532569  */


//let Regex = require('regex')

//const str = 'The number 345 has three digits';


//let regex = str.match(/\d+/)
//console.log(regex + " hello")


//const replaced = str.replace(/\D/g,'');
//console.log(replaced);




/* Exercise 3 : Regular Expression #2

Hint: Use the regex module

Ask the user for his full name (example: “John Doe”), and check the validity of his answer:
The name should contain only letters.
The name should contain only one space.
The first letter of each name should be upper cased.*/


const prompt = require('prompt-sync')();

//const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

const name = prompt("Enter your full name ?")

console.log("hello "+ name)

/*function validateName(name) {
    if (name.match(regex)) {
        console.log("Valid name");
      } else {
        console.log("Invalid name");
      }
}*/

//validateName(name);









