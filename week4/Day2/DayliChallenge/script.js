/*
What You Will Learn :

Use functions, string methods, array methods and loops


Instructions

Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you: 
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:





stars and words


Hint

The number of stars that wraps the sentence, must depend on the length of the longest word.


Requirements

To do this challenge you only need Javascript(No HTML and no CSS)



 */
/*let delimitersStars = CreateDelimitersRows();
console.log("delimitersStars : " + delimitersStars);*/
// let asigne the number of stars in the first and the last line

// !! let numberOfStars1_2 = lengthOfTheLongestWord + 4;



// let first find the length of the longest word

// !!! let lengthOfTheLongestWord = getlengthOfTheLongestWord();
// let display delimiters stars 

// !!let delimitersStars = CreateDelimitersRows();

//console.log(delimetersStars)


let userAnswer = prompt("Please enter words separeterd by commas");


let userWords = userAnswer.split(",");



let lengthOfTheLongestWord = getlengthOfTheLongestWord()




displayRows();
function displayRows(){
    let delimetersStars = CreateDelimitersRows();
    console.log(delimetersStars);
for(let  word of userWords){
    displayWords(word)
}
    console.log(delimetersStars);
}
 



function getlengthOfTheLongestWord(){
let lengthOfTheLongestWord=0;
   
    for( let word of userWords){
       let lengthOfWord = word.length;
        if(lengthOfWord > lengthOfTheLongestWord){
            lengthOfTheLongestWord = lengthOfWord
        }
    }
    return lengthOfTheLongestWord;
} 




function  CreateDelimitersRows(){
   
    let numberOfStars1_2 = lengthOfTheLongestWord + 4;
     let row = "";
for( let i = 0; i < numberOfStars1_2; i++){
    row = row + "*"
}
return row;
}



function displayWords(word){
   
    let spacesAround = lengthOfTheLongestWord - word.length + 1 ;
    let emptyRow = " ".repeat(spacesAround)
    console.log("* "+ word + emptyRow + "*")
}


