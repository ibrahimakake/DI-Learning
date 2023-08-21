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

/*

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



------------------------------------

let user1;
let user2;

function Hangman() {
  do {
    user1 = prompt("Enter a word of at least 8 letters");
  } while (user1.length < 8);
  
  console.log(user1);
  console.log(firstDisplay);

  playGame();
}

function playGame() {
  let incorrectGuesses = 0;
  let guessedLetters = [];

  while (incorrectGuesses < 10) {
    do {
      user2 = prompt("Please enter a letter");
    } while (user2.length !== 1);

    if (user1.includes(user2)) {
      guessedLetters.push(user2);
      console.log("Correct Guesses: " + guessedLetters.join(", "));
      firstDisplay = match(user2);
      console.log(firstDisplay);
      
      if (!firstDisplay.includes("*")) {
        console.log("CONGRATS! YOU WIN.");
        return;
      }
    } else {
      incorrectGuesses++;
      console.log("Incorrect Guesses: " + incorrectGuesses);
      
      if (incorrectGuesses === 10) {
        console.log("YOU LOSE.");
      }
    }
  }
}

function match(letter) {
  let updatedDisplay = "";
  for (let i = 0; i < user1.length; i++) {
    if (user1[i] === letter || firstDisplay[i] !== "*") {
      updatedDisplay += user1[i];
    } else {
      updatedDisplay += "*";
    }
  }
  return updatedDisplay;
}

let firstDisplay = displayStars(user1);

function displayStars(word) {
  let stars = "";
  for (let i = 0; i < word.length; i++) {
    stars += "*";
  }
  return stars;
}

Hangman();*/


let wordToGuess = "";
let displayWord = "";
let guessedLetters = [];
let remainingGuesses = 10;

// Prompt player 1 for a word with a minimum of 8 letters
do {
  wordToGuess = prompt("Player 1, enter a word with at least 8 letters:");
} while (wordToGuess.length < 8);

// Initialize displayWord with stars
for (let i = 0; i < wordToGuess.length; i++) {
  displayWord += "*";
}

console.log("Hidden word: " + displayWord);

// Game loop
while (remainingGuesses > 0) {
  // Prompt player 2 for a letter
  let guess = prompt("Player 2, enter a letter:").toLowerCase();

  // Check if the guessed letter is already guessed
  if (guessedLetters.includes(guess)) {
    console.log("You already guessed that letter.");
    continue;
  }

  guessedLetters.push(guess);

  // Check if the guessed letter is in the word
  if (wordToGuess.includes(guess)) {
    let updatedDisplayWord = "";
    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === guess || displayWord[i] !== "*") {
        updatedDisplayWord += wordToGuess[i];
      } else {
        updatedDisplayWord += "*";
      }
    }
    displayWord = updatedDisplayWord;
    console.log("Correct guess! Word: " + displayWord);

    if (displayWord === wordToGuess) {
      console.log("CONGRATS! YOU WIN.");
      break;
    }
  } else {
    remainingGuesses--;
    console.log("Incorrect guess. Remaining guesses: " + remainingGuesses);
  }

  if (remainingGuesses === 0) {
    console.log("YOU LOSE. The word was: " + wordToGuess);
  }
}
