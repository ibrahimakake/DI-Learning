/*🌟 Exercise 1 : Information

Instructions

Part I : function with no parameters

Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.


Part II : function with three parameters

Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/


 function infoAboutMe(){
    console.log("I'm Ibrahima, I'm 22 years old, I love football")
 }
 infoAboutMe()


 function infoAboutPerson(personName, personAge,personFavoriteColor){
    console.log("Your name is : "+ personName+ ", your age is : "+ personAge+" yers old" +" and your favorite color is : "+ personFavoriteColor+".")

 }
 infoAboutPerson("David", 45, "blue")
 infoAboutPerson("Josh", 12, "Yellow")

/*
🌟 Exercise 2 : Tips

Instructions

John created a simple tip calculator to help calculate how much to tip when John  and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill. 

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.

*/


 /*

function calculateTip(){
   let johnAnswer = prompt("What's the anount of the bill ? John")

   if( Number(johnAnswer) < 50){
      let tip1 = ((johnAnswer)*20)/100
      let finalBill1= tip1+Number(johnAnswer)
      console.log("The tip amount is : "+ "$ "+tip1)
      console.log("the final bill is : " + "$ "+finalBill1)
   }
   else if(Number(johnAnswer)> 50 && Number(johnAnswer)<200){
      let tip2 = (Number(johnAnswer)*15)/100
      let finalBill2= tip2+Number(johnAnswer)
      console.log("The tip amount is : "+ "$ "+tip2)
      console.log("the final bill is : " + "$ "+finalBill2)
   }
   else{
      let tip3 = (Number(johnAnswer)*10)/100
      let finalBill3= tip3+Number(johnAnswer)
      console.log("The tip amount is : "+ "$ "+tip3)
      console.log("the final bill is : " + "$ "+finalBill3)
   }
} calculateTip()
*/

/*
🌟 Exercise 3 : Find The Numbers Divisible By 23

Instructions

Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.

Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313


Bonus: Add a parameter divisor to the function.

isDivisible(divisor)

Example:
isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
 */

function isDivisible(divisor){
   let sum=0;
   for(let i=0; i<500;i++){
      if(i % divisor === 0){
         console.log(i)
         sum += i
        }
   }
   console.log(sum);
}
isDivisible(3)
isDivisible(45)


 