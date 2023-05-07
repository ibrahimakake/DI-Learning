// EXERCICE 1

//Store your favorite food into a variable.
let favoritefood = "Yassa";

//Store your favorite food into a variable.
let favoritemeal = "dinner";

//Console.log I eat <favorite food> at every <favorite meal>
console.log("I eat " + favoritefood + " at every " + favoritemeal+".");

// Exercise 2 part 1
const myWatchedSeries = ["black mirror", " money heist", " the big bang theory"];

//Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedseriesLength = myWatchedSeries.length;

//Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//For example : black mirror, money heist, and the big bang theory

//...let myWatchedSeriesSentence = myWatchedSeries.toString();...
let myWatchedSeriesSentence = myWatchedSeries[0]+ ", " + myWatchedSeries[1]+ ", and " + myWatchedSeries[2]

//Console.log a sentence using both of the variables created above
//For example : I watched 3 series : black mirror, money heist, and the big bang theory

console.log("I watched " + myWatchedseriesLength + " series : " + myWatchedSeriesSentence + ".")
  
// Part 2

//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friends";

//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Under the Dom");

//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("TopBoy");

//Delete the series “black mirror”.
//let removeBlackMirror = myWatchedSeries.splice(myWatchedSeries[0],1)
delete myWatchedSeries[1]

//Console.log the third letter of the series “money heist”.
let moneyHeist = myWatchedSeries[2]
console.log(moneyHeist.moneyHeist[2])

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

console.log(myWatchedSeries)

//let blackMirrorIndex = myWatchedSeries.indexOf(0)
//let removeBlackMirror = myWatchedSeries.splice(blackMirrorIndex,1)
//delete myWatchedSeries.myWatchedSeries[0];
//let str = "money heist" 
//console.log(str.substring(2,3))
//console.log(myWatchedSeries.chartAt([1],2))



//Exercise 3


 
 let celsiusTemperature = 15;
 let fahrenheitTemperature = celsiusTemperature/5*9+32

console.log(celsiusTemperature+ "C" +" is" + fTemperature+ "F"+".")

//Exercise 4

/*For each expression, predict what you think the output will be in a comment (//) without first running the command. 
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



For example

console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5


Using the code below: */
let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: It will output 55 because 34 and 21 are numbers.
    // Actual: 55
    
     a = 2;

    console.log(a+b) //second expression
    // Prediction: It will output 23 because a has chanched from 34 to 2
    // Actual: 23

     // 3. c is indefined, it doesn't have any value affected to it.
     
     // 4.It will output 75

     //Exercise 5

     /*For each expression, predict what you think the output will be in a comment (//) without first running the command. 
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



For example

typeof("potato")
// Prediction: Vegetable
// Actual: String


1. What is the output of each of the expressions below?*/
     
     typeof(15)
// Prediction: int , because it's a number
// Actual: number

typeof(5.5)
// Prediction: number, because JavaScript dosen't specify numbers.
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string, in a quote.
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: true
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: string
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction:string
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: string
// Actual: NaN

99 * "hello"
// Prediction: string
// Actual: NaN

1 != 1
// Prediction: false, because 1 is not different from 1
// Actual: false

1 == "1"
// Prediction: false, because a number can't be equal to a string
// Actual: true

1 === "1"
// Prediction: True
// Actual: false


//Exercise 6

/*For each expression, predict what you think the output will be in a comment (//) without first running the command. 
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



1. What is the output of each of the expressions below?
*/

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0; the remainder
// Actual: 0

5 % 10
// Prediction: 
// Actual:5

"Java" + "Script"
// Prediction: JavaScript; concatination
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: ' '

" " + 0
// Prediction: 0
// Actual:0

true + true
// Prediction: true
// Actual: 2

true + false
// Prediction: false
// Actual: 1

false + true
// Prediction:
// Actual: 1

false - true
// Prediction:
// Actual:-1

!true
// Prediction: false; the opposite of true
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN







