/*
1rst Daily Challenge

Create two functions. Each function should return a promise.
The first function called makeAllCaps(), takes an array of words as an argument
If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
else, reject the promise with a reason.
The second function called sortWords(), takes an array of words uppercased as an argument
If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
else, reject the promise with a reason. */

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words)) {
            const areAllStrings = words.every(word => typeof word === "string");
            if (areAllStrings) {
                const uppercasedWords = words.map(word => word.toUpperCase());
                resolve(uppercasedWords);
            } else {
                reject("All elements in the array should be strings");
            }
        } else {
            reject("Input should be an array");
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.length > 4) {
            const sortedWords = words.sort();
            resolve(sortedWords);
        } else {
            reject("Array should have more than 4 elements");
        }
    });
}

// Test cases
makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));




/*
Create three functions. The two first functions should return a promise..

The first function is named toJs():
this function converts the morse json string provided above to a morse javascript object.
if the morse javascript object is empty, throw an error (use reject)
else return the morse javascript object (use resolve)

The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

This function asks the user for a word or a sentence.
if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
else return an array with the morse translation of the user’s word.
if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


The third function called joinWords(morseTranslation), takes one argument: the morse translation array

this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

Chain the three functions.
*/




const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseObject = JSON.parse(morse);
        if (Object.keys(morseObject).length === 0) {
          reject("Morse object is empty");
        } else {
          resolve(morseObject);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence:");
      if (!userInput) {
        reject("No input provided");
        return;
      }
  
      const morseTranslation = [];
      const userInputLower = userInput.toLowerCase();
  
      for (const char of userInputLower) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`Character "${char}" not found in morse dictionary`);
          return;
        }
      }
  
      resolve(morseTranslation);
    });
  }
  
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join(" / ");
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = morseString;
  }
  
  toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.log(error));
  


    console.log(fetch("https://api.artic.edu/api/v1/artworks/4"))