//Exercise 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
//Remove Banana from the array.
delete fruits[0];
console.log(fruits);
 // or sift.fruites[0]
//Sort the array in alphabetical order.
fruits.sort()
console.log(fruits);
//Add “Kiwi” to the end of the array.
fruits.push("kiwi")
console.log(fruits);
//Remove “Apples” from the array. Don’t use the same method as in part 1.
 fruits.splice(fruits[0],1)
console.log(fruits)
//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
//At the end you should see this outcome:
//["Kiwi", "Oranges", "Blueberries"]
fruits.reverse()
console.log(fruits)

//Exercise 2:
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
const orange = moreFruits[1][1]
console.log(orange)


