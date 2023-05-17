/*🌟 Exercise 2 : Tips

Instructions

John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill. 

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.
*/

function calculateTip(){
    const amount = Number (prompt("john, what's the amount of bill ?") )
   let tip;
  
    if (amount < 50){
        tip= amount*(20/100)
    }
       
    else if(amount > 50 && amount < 200 ){

        tip =  amount*(15/100)
    }
    
    else{
        tip=  amount*(10/100)
    }
    console.log("the bill is "+ amount + " and the tip is "+ tip)
    
    }
   
   
   



calculateTip()