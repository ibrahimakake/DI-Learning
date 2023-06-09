/**Instructions

Create a function that returns true if all parameters are truthy, and false otherwise.

Examples
allTruthy(true, true, true) ➞ true

allTruthy(true, false, true) ➞ false

allTruthy(5, 4, 3, 2, 1, 0) ➞ false */

let truthy =(parameter1,parameter2,parameter3,) => {
     if( parameter1 == true && parameter2 == true && parameter3 == true ){
        
        return true

     }else{

        return false
     }
}
          console.log(truthy(1,1,1))