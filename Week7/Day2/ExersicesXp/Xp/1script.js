/**Exercise 1 : Analyzing

Instructions

Analyze these pieces of code before executing them. What will be the outputs ?
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];

// The output will be : [ "bread","apple","orange","carrot", "potato"]


console.log(result);

------2------
const country = "USA";

// The output will be : ["USA"]


console.log([...country]);



------Bonus------
let newArray = [...[,,]];

//. The uotput will be : [,,]


console.log(newArray);

// Result : [undefined,undefind]
*/

