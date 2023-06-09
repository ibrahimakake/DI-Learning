/*Exercise 6 : Bank Details

Instructions

In this exercise, you have to decide which type of variables you have to use (ie. let or const):

Create a global variable called bankAmount which value is the amount of money currently in your account.
Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
Create an array with all your monthly expenses, both positive and negative (money made and money spent).
Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
Display your current bankAccount standing at the end of the month.
*/

 

let  bankAccount = 0;

const amountVat = 0.17 ;

const details  = ["+200", "-10400", "+3146", "+167", "-900"]


let EarnVatdetails = [];
 
details.forEach(function(e){
     
   if(Number(e) > 0){
   e =  Number(e)*amountVat 
   EarnVatdetails.push(e)
   }  
    
})
console.log(EarnVatdetails)

let ExpenseVatdetails = [];
 
details.forEach(function(e){
     
   if(Number(e) < 0){
   e =  Number(e)*amountVat 
  ExpenseVatdetails.push(e)
   }  
    
})
console.log(ExpenseVatdetails)


bankAccount = EarnVatdetails.reduce(function (total,num){return (total+ num)}) - ExpenseVatdetails.reduce(function (total,num){return (total+ num)})
console.log(`The current bank account is ${bankAccount}`)

