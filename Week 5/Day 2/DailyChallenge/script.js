console.log("hello")
let noun = document.getElementById("noun")
console.log(noun)

let adjective = document.getElementById("adjective")

let person = document.getElementById("person")
let verb = document.getElementById("verb")
let place =document.getElementById("place")
let button = document.getElementById("lib-button")

let input= document.getElementsByTagName("input")

button.addEventListener("submit", submitResult)





function submitResult(e){
    e.preventDefault();
    noun.value;
    adjective.value;
    person.value;
    verb.value;
    place.value;

   
   

    

    
}