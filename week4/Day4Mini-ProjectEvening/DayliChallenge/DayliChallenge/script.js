/*
Instructions

Have you heard the infamous song “99 Bottles of Beer?”
In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

==============================
Example
==============================

99 bottles of beer on the wall
99 bottles of beer
Take 1 down, pass it around
98 bottles of beer on the wall
`
98 bottles of beer on the wall
98 bottles of beer
Take 2 down, pass them around
96 bottles of beer on the wall

96 bottles of beer on the wall
96 bottles of beer
Take 3 down, pass them around
93 bottles of beer on the wall

ect …

==============================



Prompt the user for a number to begin counting down bottles.

In the song, everytime a bottle drops, 
the subtracted number should go up by 1. 
For example,

    We start the song at 99 bottles
    -> Take _1_ down, pass it around
    -> we have now 98 bottles

    -> then, Take _2_ down, pass them around
    -> we have now 96 bottles

    -> then, Take _3_ down, pass them around
    -> we have now 93 bottles

    ... ect


3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


4. Note : Make sure you get the grammar correct.

For 1 bottle, you pass “it” around.
For more than one bottle, you pass “them” around.

 */


let userAnswer = Number(prompt("Please enter a number to begin the game"))
 
let numberOfBeerToTakeAway = 1;

while( userAnswer > 0){
    let beer =  getBeer(userAnswer,numberOfBeerToTakeAway);
    
    
    
    console.log(beer);
      
    userAnswer -= numberOfBeerToTakeAway;
       
    numberOfBeerToTakeAway++;
   


}

//let beer =  getBeer(userAnswer,numberOfBeerToTakeAway)

function getBeer(num,counter){

    let bottleOrBottles = getBottleOrBottles(num);

    let itOrThem = getItOrThem(counter);
      
      let beer = `${num} ${bottleOrBottles} of beer on the wall
      ${num}  ${bottleOrBottles} of beer
      Take ${counter}  down, pass ${itOrThem} around
      ${num - counter} ${ getBottleOrBottles(num - counter)} of beer on the wall`;

      return beer;


}
//console.log(" beer : " + beer)

// plural or singular

function isplural(num){
       if ( num > 1 ){
        return true;
       }else{
        return false;
       }
}

 // bottles or bottle

function getBottleOrBottles(num){
    if(isplural(num)){
       return " bottles "
    }else{
       return " bottle "
    }
}


let itOrThem = getItOrThem(counter)

function getItOrThem(counter){
    
    if (counter == 1){
        return "it"
    }else{
        return "them"
    }
}