/**🌟 Exercise 2 : Kg And Grams

Instructions

Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference between function declaration and function expression.
Finally, use a one line arrow function and invoke it.
 */

// 1.  function declaration 

  let conversonKgIntoG = function(numberInKg){
        return numberInKg * 1000
  }

  console.log(conversonKgIntoG(3))

// 2. function expression

function conversion(number){
    return number*1000
}
console.log(conversion(3))

// 3. In a  function declaration, the declared variable becomes the name of the function 

// 4.  One line Arrow function 

let Arrow = number => number * 1000

console.log(Arrow(3))