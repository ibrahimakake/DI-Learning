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
     title:"Think and Grow Rich ",
    author:"Napoleon Hill",
    image: "image1.png",
    alreadyRead: false
},
{
    title:"Rich Dad Poor Dad",
    author:"Robert Kiyosaki",
    image:"image2.png",
    alreadyRead: true
}
]

// Create a new table element
const table = document.createElement("table");

// Add the table to the div element
document.querySelector("div").appendChild(table);

// Loop through the books array
for (let book of allBooks) {

  // Create a new row element
  const row = document.createElement("tr");

  // Add the book's title to the row
  const titleCell = document.createElement("td");
  titleCell.textContent = book.title;
  row.appendChild(titleCell);

  // Add the book's author to the row
  const authorCell = document.createElement("td");
  authorCell.textContent = book.author;
  row.appendChild(authorCell);

  // Add the book's image to the row
  const imageCell = document.createElement("td");
  const image = document.createElement("img");
  image.src = book.image;
  image.width = 100;
  imageCell.appendChild(image);
  row.appendChild(imageCell);

  // If the book is already read, set the color of the book's details to red
  if (book.alreadyRead) {
    row.style.color = "red";
  }

  // Add the row to the table
  table.appendChild(row);
}


















