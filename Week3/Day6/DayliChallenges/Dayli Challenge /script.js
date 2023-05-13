/* Instructions

Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
Do this Daily Challenge by yourself, without looking at the answers on the internet.
*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *
*/




let number = 7 ;
let stars = ""

for (let i = 0; i< number; i++){
   console.log( stars = stars +" * ")
}


// neste loop

let maxNumber = 6

for (let i = 0;i < maxNumber;i++){
     
    const numberofStars = i + 1
    let lineofStars =""
    for (let j= 0;j < numberofStars;j++){
        lineofStars = lineofStars + " * "
    } 
        console. log (lineofStars)
  
}
   
   