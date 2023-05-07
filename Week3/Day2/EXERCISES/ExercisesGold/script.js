//EXERCISE 1 : Favorite Color
// 1. Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let sentence = ["my","favorite","color","is","blue"];
let Sentence = sentence.toString()
console.log(Sentence)
//Exercise 2 : Mixup
// 1. Create 2 variables. The values should be strings.

let str1 = "ibrahima";
let str2 = "kake"; 
//2. Slice out and swap the first 2 characters of the two strings from part 1.

let Str1 = str1.slice(0,2);
let Str2 = str2.slice(0,2);
console.log(Str1)
console.log(Str2)
let swapStrin1 = Str1.replace('ib',Str2);
console.log(swapStrin1)
let swapStrin2 = Str2.replace('ka',Str1);
console.log(swapStrin2)

// 3.  Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
   let mixsentences = swapStrin1 + str1.slice(2) +' '+ swapStrin2+str2.slice(2);
console.log(mixsentences)

// EXERCISE 3 : Calculator
/*Make a Calculator. Follow the instructions:

Prompt the user for the first number.
Store the first number in a variable called num1. 
Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
Prompt the user for the second number.
Store the second number in a variable called num2.
Create an Alert where the value is the SUM of num1 and num2.
BONUS: Make a program that can subtract, multiply, and also divide!*/


let num1 = prompt("enter your first number")
//console.log(typeof(num1))
console.log(typeof(parseInt(num1))) 

let num2 = prompt("enter your second number")
alert(parseInt(num1)+ parseInt(numm2)) 

// Subtract

let numm1 = prompt("enter your first number")
//console.log(typeof(numm1))
console.log(typeof(parseInt(numm1))) 

let numm2 = prompt("enter your second number")
alert(parseInt(numm1) - parseInt(numm2)) 

// multiply

let nummm1 = prompt("enter your first number")
//console.log(typeof(numm1))
console.log(typeof(parseInt(nummm1))) 

let nummm2 = prompt("enter your second number")
alert(parseInt(nummm1) * parseInt(numm2)) 

//Division
let nummmm1 = prompt("enter your first number")
//console.log(typeof(numm1))
console.log(typeof(parseInt(nummmm1))) 

let nummmm2 = prompt("enter your second number")
alert(parseInt(nummmm1) / parseInt(nummm2)) 
