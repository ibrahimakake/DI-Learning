/**🌟 Exercise 5 : Colors #2

Instructions

Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator.
 */

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];






colors.forEach(function(e,i){
   
    console.log(`${i+1}${getOrdinal(i+1)} choise is ${e}`)
})

function getOrdinal(i){
    if(i===1 || i===2 || i===3) {
        return ordinal[i]
    }else{
         return ordinal[0]
    }
   
 }






