/*Exercise 1 : Checking The BMI

Instructions

Hint:
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

Create two objects, each object should hold a person’s details. Here are the details:
FullName
Mass
Height

Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

Outside of the objects, create a JS function that compares the BMI of both objects. 

Display the name of the person who has the largest BMI. */

function calculateBMI(mass, height) {
    let bmi = mass / Math.pow(height, 2);
    return bmi;
 }
 
 let person1 = {
   FullName: "Ibrahima",
   Mass: 76,
   Height: 184,
   BMI: calculateBMI(76, 184)
 };
 
 let person2 = {
   FullName: "Ayoub",
   Mass: 86,
   Height: 174,
   BMI: calculateBMI(86, 174)
 };
 
 if (person1.BMI > person2.BMI) {
   console.log(`${person1.FullName} has the largest BMI.`);
 } else if (person2.BMI > person1.BMI) {
   console.log(`${person2.FullName} has the largest BMI.`);
 } else {
   console.log("Both persons have the same BMI.");
 }
 
 /*Exercise 2 : Grade Average

Instructions

Hint:
- This Exercise is trickier then the others. You have to think about its structure before you start coding. 
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

Create a function called findAvg(gradesList) that takes an argument called gradesList.

Your function must calculate and console.log the average.

If the average is above 65 let the user know they passed

If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other. */


function calculateAverage(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) { // Use i = 0 to start at the first element
        sum += gradesList[i];
    }
    let average = sum / gradesList.length;
    return average; // Return the calculated average
}

function findAvg(gradesList) {
    let average = calculateAverage(gradesList); // Call the calculateAverage function
    console.log("Average:", average);

    if (average > 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}

// Test with an example gradesList
const gradesList = [80, 75, 90, 60, 70];
findAvg(gradesList); // Call the findAvg function
