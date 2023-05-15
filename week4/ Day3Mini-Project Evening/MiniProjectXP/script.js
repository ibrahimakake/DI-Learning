


function playTheGame(){
    let answer1 = confirm("Would you like to play the game ?");
    if(answer1===false){
        alert("No problem, Goodbye");
    }
    else{
     let answer2 = prompt("please enter a number between 0 and 10")
     if (isNaN(answer2)){
        alert("Sorry Not a number, Goodbye");
     }
     else if(answer2 < 0 || answer2 >10){
        alert("Sorry it’s not a good number, Goodbye");
     }
     else{
        let computerNumber = Math.floor(Math.random()*11) 
        compareNumbers(answer2, computerNumber)
     }
    }
     
}

function compareNumbers(userNumber,comparenumber){
    for(let i = 0; i<3; i++){
        if(userNumber==comparenumber){
            alert("WINNER");
            break;
        }
        else if( i == 2 && userNumber != comparenumber ){
            alert("out of changes");
        
    }
        else if(userNumber>comparenumber){
            alert("Your number is bigger then the computer’s, guess again");
            userNumber = prompt("Enter a new number");
            
        }
        else if(userNumber<comparenumber){
            alert("Your number is smaller then the computer’s, guess again");
            userNumber = prompt("Enter a new number");
            
        }
        
    
   }

}