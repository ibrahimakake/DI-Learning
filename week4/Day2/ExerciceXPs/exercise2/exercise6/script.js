/*🌟 Exercise 6 : Vacations Costs

Instructions

Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel. 

Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$ 

Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental. 

Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z. 
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
 */

hotelCost()

 function hotelCost(){
   let userAnswer1;
   while(!isJustNumbers(userAnswer1) || isJustNumbers("")){
     userAnswer1 = prompt("How many nigths are you gonna stay ? ")
       
    }
   let numberOfNigth = Number(userAnswer1)
       let nigthCost = 140
       let totalCost = numberOfNigth*nigthCost;
       console.log("The total price is : " +"$"+ totalCost )

 }


 function isJustNumbers(num){
    let regex1 = new RegExp(/^[0-9]*$/)
    return regex1.test(num)
 }

 let price = planeRideCost()

 console.log("the price is " + price)

function planeRideCost(){
    let userAnswer2;
 
    while(isJustString(userAnswer2)){
      userAnswer2 = prompt("What is your destination ?")
    }

   if(userAnswer2 === "London"){
    return "$138"
   }
else if(userAnswer2 === "Paris"){
   return "$220"
   
}else{
   return "$300"
 
}

}


 function isJustString(str){
    let regex2 = new RegExp(/\d/)
    return regex2.test(str)
 }