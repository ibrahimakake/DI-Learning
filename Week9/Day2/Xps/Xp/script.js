/*Exercise 1 : Comparison

Instructions

Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than or equal to 10
the promise rejects if argument is greater than 10.
 */


function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }
    });
}

// Test cases
compareToTen(5)
    .then(result => console.log(result))
    .catch(error => console.error(error));

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.error(error));


    /*Exercise 2 : Promises

Instructions

Create a promise that resolves itself in 4 seconds and returns a “success” string.
 */


    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 4000);
    });
    
    myPromise.then(result => {
        console.log(result);
    });
    
/*🌟 Exercise 3 : Resolve & Reject

Instructions

Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
 */


const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(result => {
    console.log("Resolved:", result);
});

const rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch(error => {
    console.log("Rejected:", error);
});
