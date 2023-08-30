/*🌟 Exercise 2 : Users And Style

Instructions

<div>Users:</div>
<ul>
    <li>John</li>
    <li>Pete</li>
</ul>


Add the code above, to your HTML file 

Using Javascript:
Add a “light blue” background color and some padding to the <div>.
Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/
let div = document.querySelector("div")
div.style.backgroundColor=" light blue "
div.style.padding = 5;

let ul1 = document.querySelector("ul");
console.log(ul1)

let firstLi = ul1.firstElementChild;
console.log(firstLi)

firstLi.style.display="none";

let lastLi =  ul1.lastElementChild;
console.log(lastLi)

lastLi.style.border =   "solid" ;

document.body.style.fontSize= 23;

if ( div.style.backgroundColor=" light blue "){
    alert("Hello "+ firstLi.innerHTML +" and "+ lastLi.innerHTML)
}


