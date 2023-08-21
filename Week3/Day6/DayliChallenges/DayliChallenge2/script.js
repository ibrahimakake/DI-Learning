/*
const numbers = [5,0,9,1,7,4,2,6,3,8];

Using the .toString() method convert the array to a string.
Using the .join()method convert the array to a string. Try passing different values into the join.
Eg .join(“+”), .join(” “), .join(“”)

Bonus : To do this Bonus look up how to work with nested for loops
Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
The output should be: [9,8,7,6,5,4,3,2,1,0]
Hint: The algorithm is called “Bubble Sort”

Use a temporary variable to swap values in the array.
Use 2 “nested” for loops (Nested means one inside the other).
Add comments and console.log the result for each step, this will help you understand.
Requirement: Don’t copy paste solutions from Google
 */

const numbers1 = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
const arrayToString = numbers1.toString();

console.log(arrayToString); // Output: "5,0,9,1,7,4,2,6,3,8"

const joinedWithPlus = numbers1.join("+");
const joinedWithSpace = numbers1.join(" ");
const joinedWithEmpty = numbers1.join("");

console.log(joinedWithPlus);   // Output: "5+0+9+1+7+4+2+6+3+8"
console.log(joinedWithSpace);  // Output: "5 0 9 1 7 4 2 6 3 8"
console.log(joinedWithEmpty);  // Output: "5091742638"


const numbers2 = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Bubble Sort in descending order
for (let i = 0; i < numbers2.length - 1; i++) {
  for (let j = 0; j < numbers2.length - i - 1; j++) {
    if (numbers2[j] < numbers2[j + 1]) {
      // Swap the values using a temporary variable
      const temp = numbers2[j];
      numbers2[j] = numbers2[j + 1];
      numbers2[j + 1] = temp;
    }
  }
}

console.log(numbers2); // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


