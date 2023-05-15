/*🌟 Exercise 1 : Users

Instructions

<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>


Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
Change each first name of the two <ul>'s to your name. (Hint : use a loop)

Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.*/
//1

let div = document.getElementById("container")
console.log(div)

let fisrtUl=document.querySelector("ul")
console.log(fisrtUl)
let firstChange = fisrtUl.lastElementChild.innerHTML = " Richard"

console.log(firstChange)

let secondUl= document.getElementsByClassName("list")[1]

console.log(secondUl)

let DeleteLi = secondUl.getElementsByTagName("li")[1]
console.log(DeleteLi)
DeleteLi.remove()
console.log(secondUl)

let allUl = document.querySelectorAll("ul")

console.log(allUl)

for(let li of allUl){
    li.firstElementChild.innerHTML="Ibrahima"
}


for(let newClass of allUl){
    newClass.classList.add("student_list");
}

allUl[0].classList.add("university","attendance")












































/*1. 
let firstDiv = document.getElementById("container");
let secondDiv = document.querySelector("#container");
console.log(firstDiv);
console.log(secondDiv);

// 2.

let fisrtUl = document.getElementsByTagName("ul")[1]



let fisrtUl2 = document.getElementsByClassName("list")
for( let x of fisrtUl2){
    console.log(x);
}


// 3.
let firstLi = document.getElementsByTagName("ul")


for( let x of fisrtUl){
    console.log(x.firstElementChild);
}

let firstLi2 = document.getElementsByClassName("list")


for( let x of firstLi2){
    console.log(x.firstElementChild);
}

EXERCISE 

Write variables to get the value of the attributes of the specified link :

href
hreflang
rel
target
type. 

let par = document.getElementsByTagName("a")[0]

var href = par.href
console.log(href)
var hreflang = par.hreflang
console.log(hreflang)
var rel = par. rel
console.log(rel)
var target = par.target
console.log(href)
var type = par.type
console.log(type)
*/

