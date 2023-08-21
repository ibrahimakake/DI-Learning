/*Exercise 1 : List Of People

Instructions

const people = ["Greg", "Mary", "Devon", "James"];


Part I - Review About Arrays

Write code to remove “Greg” from the people array.

Write code to replace “James” to “Jason”.

Write code to add your name to the end of the people array.

Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

Write code that gives the index of “Foo”. Why does it return -1 ?

Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?


Part II - Loops

Using a loop, iterate through the people array and console.log each person.

Using a loop, iterate through the people array and exit the loop after you console.log “Jason” . 
Hint: take a look at the break statement in the lesson.*/

// Part I - Review About Arrays
const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
console.log(people);
people[2]= "Jason"
console.log(people);
people.push("Ibrahima")
console.log(people);
 
console.log(people.indexOf("Mary"))

console.log(people.slice(1,4))


console.log(people.indexOf("Foo")) // it return -1 because "Foo" is not defined or is not in the array.

let last = people.length
console.log(last)

console.log(last-1)
// indexof the last element is equal to Array.length-1


// Part II - Loops

for( let a of people){
    console.log(a)

}

const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break; 
  }
}




/*Exercise 2 : Your Favorite Colors

Instructions

Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus*/

const colors = ["blue","yellow","green","red","white"];
const suffixes = ["st","nd","rd","th","th"]
for( let z=0; z < colors.length; z++){
    
    
        console.log( "My #" + (z + 1 )+  " choice is "+ colors[z])
       
        
 }       
  

     

   //bonus
   
   
   
   for( let x=0  ; x < suffixes.length; x++){
    
    console.log("My "+ (x + 1)+ suffixes[x]+ " choise is "+ colors[x])

   
}
/*🌟 Exercise 3 : Repeat The Question

Instructions

Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
 */


let userInput = prompt("Please enter a number:");
let number = parseFloat(userInput); 

while (typeof number === 'number' && number < 10) {
  userInput = prompt("Please enter a new number:");
  number = parseFloat(userInput);
}

console.log("The number is now greater than or equal to 10.");




   

   /*🌟 Exercise 4 : Building Management

Instructions:

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


Review About Objects

Copy and paste the above object to your Javascript file.

Console.log the number of floors in the building.

Console.log how many apartments are on the floors 1 and 3.

Console.log the name of the second tenant and the number of rooms he has in his apartment. 

Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.*/


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}; 
 
let noff = building.numberOfFloors;
console.log("The number of floors is " +noff)

let appF1= building.numberOfAptByFloor.firstFloor

console.log(" The number of apartments on the first floor is " + appF1)

let app3 = building.numberOfAptByFloor.thirdFloor
console.log("The number of apartments on the third floor is "+ app3)
 
let nS= building.nameOfTenants[1]

let nSr = building.numberOfRoomsAndRent.dan[0]
console.log("The name of the second tenant is "+nS+" and the number of his room is "+ nSr)

let sarahRent = building.numberOfRoomsAndRent.sarah[1]
let davidRent = building.numberOfRoomsAndRent.david[1]
let danRent = building.numberOfRoomsAndRent.dan[1]
let sum = sarahRent+ davidRent
if (sum>danRent){

    console.log("The sum of Sarah' and David's rent is bigger than Dan's rent")

   console.log("So Dan's rent will increase by : " + (1200-danRent))
}

/*🌟 Exercise 5 : Family

Instructions

Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.
 */

let family= { Dad: "Abdoulaye", Mum: "Oumou" , Myself:"Ibrahima"}

for(let i in family){
    console.log(i)

}
for(let i in family){
    console.log(family[i])

}
/*Exercise 6 : Rudolf

Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
Given the object above and using a for loop, console.log “my name is Rudolf the raindeer” */

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let sentence = '';
  
  for (let key in details) {
    sentence += key + ' ' + details[key] + ' ';
  }
  
  console.log(sentence);
  
/*Exercise 7 : Secret Group

Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”
 */

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

let society = ''
for(let i in names){
   society += names[i][0]
   
    // names[i][0].sort();
}

console.log(society)





