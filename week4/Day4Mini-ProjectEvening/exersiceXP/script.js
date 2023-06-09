/*Create A Hangman Game:

Instructions:

Create the “Hangman” game. Your game will run in the console.
You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

Check it out here

Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
At this point continuously prompt player 2 for a letter.
If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
If player 1 wins, display a message that says CONGRATS YOU WIN. */



let user1;
let user2;

function Hangman(){
  
   
   do{
         user1 = prompt("enter a word of at leat 8 letters ")
       
    }while(user1.length<8)
    console.log(user1)
   
    console.log(firstDisplay)
 
    do{
            user2 = prompt("Please enter a letter ")
      
        }while(user2.length>1)
         console.log(user2)

console.log(matchWord)
         
        
        
}


let chosen = choosenLetter()
function choosenLetter(){

    for  (let i=0; i<user1.length;i++){
        if(user1[i]===user2){
            console.log(i)
        }
     }
}

let matchWord = match()
function match(){
    for(let i=0; i<firstDisplay.length;i++){
        if(i===chosen){
            firstDisplay.replace(firstDisplay[i],chosen)
        }
        return firstDisplay
     }
}





let firstDisplay = displayStars(user1)

function displayStars(word){
    let stars=""
    for (let i=0;i<word.length;i++){
        stars= stars + "*"
    }
    return stars
}