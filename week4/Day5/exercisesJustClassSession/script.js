// 1. 
let firstDiv = document.getElementById("container");
let secondDiv = document.querySelector("#container");
console.log(firstDiv);
console.log(secondDiv);

// 2.

let fisrtUl = document.getElementsByTagName("ul")
for( let x of fisrtUl){
    console.log(x);
}

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

/* EXERCISE 

Write variables to get the value of the attributes of the specified link :

href
hreflang
rel
target
type. */

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


