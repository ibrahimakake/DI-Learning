/** 
 * Exercise 3 : Is It A String ?

Instructions

Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
Check out the example below to see the expected output
Example:

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

*/
let isString = (value)=> {
   return typeof value === "string" ? true : false
}
  console.log(isString([3,45,6,7,78]))

