/**Instructions

Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method. 

Create another arrow function named cloneGroceries.
In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
In the function, create a variable named shopping that is equal to the groceries variable.
Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

Invoke the cloneGroceries function. */

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let cloneGroceries = ()=>{
    groceries.fruits.forEach(function(e){
        console.log(e)
    })
    user = client
    client="Betty"
    // explication : we won't see this  modification in the user variable because the affectation of a value to a variable is independant from any other variable 

  shopping = groceries
  groceries.totalPrice = "35$"
 
 // explication : we will see this modification in the shopping because the affection or modification is done by reference !

  groceries.other.payed = false 

  // explication : we will see this modification in the shopping because the affection or modification is done by reference !

 
 
  console.log(groceries) 

}
cloneGroceries()


