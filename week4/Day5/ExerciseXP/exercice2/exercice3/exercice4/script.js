/*Exercise 4 : My Book List

Instructions

Take a look at this link for help.

The point of this challenge is to display a list of two books on your browser.

In the body of the HTML page, create an empty div: 
<div class="listBooks"></div>
In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red.
 */

let allBooks =[
    {
     title:"Think and Grow Rich",
    author:"Napoleon Hill",
    image: "image1.png",
    alreadyRead: false
},
{
    title:"Rich Dad and Poor Dad",
    author:"Robert Kiyosaki",
    image:"image2.png",
    alreadyRead: true
}
]
let div = document.querySelector(".listBooks")

let table = document.createElement("table")
table.innerHTML=`
<thead>
<tr>
<th colspan = "3" > Books information <\th>
<\tr>
<\thead>
<tbody>
<tr>
<td>${allBooks[0].title} written by ${allBooks[0].author}<\td>
<td><img src"${allBooks[0].image}"\><\td>
<td>Already read : ${allBooks[0].alreadyRead}<\td>
<\tr>

<tr>
<td>${allBooks[1].title} written by ${allBooks[1].author}<\td>

<td>${allBooks[1].image}<\td>

<td>${allBooks[1].alreadyRead}<\td>
<\tr>
<\tbody>`

div?.appendChild(table)