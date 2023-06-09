/**🌟 Exercise 1 : Scope

Instructions

Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file. Explain your predictions.*/

// #1
    /* function funcOne() {
    let a = 5;
    if(a > 1) {
    a = 3;
     }
    alert(`inside the funcOne function ${a}`);
}
//prediction : the output value of a will be "3" because 3 is the last value assign to the variable a.


// #1.1 - run in the console:
   funcOne()

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
 //prediction : we will have an error because "const" is impossible to reasign

   */            
                 

//#2


/*
let a = 0;


function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// prediction : the output of a wiil be 0 until the fuction funcTwo() is being declared 

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//prediction : the output will be 0 because we can not reasign a value using const

//#3
/*
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

// pediction: the output of a will be "hello"because the function is belong to has been declared first


    */


//#4
/*
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// prediction : the output of a will be "test" because the alert and the value of a using let are in the same function scoop

// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//prediction : same output because we can change the value of a variable with const but never reasign.

*/


//#5

const a = 2;
if (true) {
    const a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//predicion : same output because there are in different blocks !


 
