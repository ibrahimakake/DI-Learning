//EXERCISE 1: Simple If/Else Statement

/* Instructions

1. Create 2 variables, x and y. Each of them should have a different numeric value.
2. Write an if/else statement that checks which number is bigger.
Example :

let x = 5;
let y = 2;

You should display:
x is the biggest number.   */

let x = 5;
let y = 2;
 
if( x>y){
    console.log("x is the biggest number")
}


// Exercise 2: Chihuahua

/*Instructions

Create a variable called newDog where it’s value is “Chihuahua”.
Check and display how many letters are in newDog.
Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’
 */

 let newDog = "Chihuahua";

 let Lenght = newDog.length;
  
 console.log(Lenght)
 console.log(newDog.toUpperCase())
 console.log(newDog.toLowerCase())
 

 if (newDog === "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed")

 }
else{
    console.log(  "I dont care, I prefer cats")
}

//Exercise 3: Even Or Odd

/*Prompt the user for a number and save it to a variable.
Check whether the variable is even or odd.
If it is even, display: “x is an even number”. Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.*/

let a = prompt("enter a number ")
if ( a % 2 === 0 ){
    alert("a is an even number");
}
else if (a % 2 !== 0)   {
    alert("a is an odd number");
}
else{
    alert("try a number");
}
// Exercise 4: Group Chat
 
/*Instructions

Below is an array of users that are online in a group chat.

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
If there is no users (the users array is empty), console.log “no one is online”.
If there is 1 user, console.log “<name_user> is online”.
If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
For example, if there are 5 users, it should display:
name_user1, name_user2 and 3 more are online*/

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

console.log(users.length)
if (users.length==0){
    console.log("no one is online")
   
}
else if(users.length ===1) {
console.log( users[0] + " is online")
}
else if(users.length ===2) {
    console.log( users[0] + " and "+users[1]+ " are online")
 }
else if(users.length>2) {
    const rest = users - 2
        console.log( users[0] +users[1] + " and " + rest +" more are online.")
}   


    


