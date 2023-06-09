/**Exercise 4 : Nested Arrays

Instructions

Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]]. 
Bonus Try to do it on one line.
Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
 */

//  1.
const array = [[1],[2],[3],[[[4]]],[[[5]]]];

function flattenArray(array) {
  return array.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc.concat(flattenArray(cur));
    } else {
      return acc.concat([cur]);
    }
  },);
}

const flattenedArray = flattenArray(array);
console.log(flattenedArray); 


//  2.


const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]

let result1 = greeting.map(array =>
    array.join(" ") )
console.log(result1)

let result2 =result1.join(" ")
console.log(result2)

// 3. 

trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] 

let result3 = trapped.map(array =>
    array.join(" ") )
console.log(result3)

let result4 = function(arr){
    arr.map(element => {
        if(isNaN(element)) return parseFloat(element)
    });
}
    let arr = result3

    console.log(result4)

