/**Exercise 3 : Analyze This Code

Instructions

Using this code:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
What is the value of i ?
 */
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
 console.log(newArray)
//  The values of i are 0, 1, 2, 3, 4 and 5
