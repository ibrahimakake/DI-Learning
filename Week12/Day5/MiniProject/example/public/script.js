//const { application } = require("express");

let form = document.querySelector("form");

form?.addEventListener("submit", sendData);
let items=[];
let ul =  document.getElementById("display")
function sendData(e) {
  e.preventDefault();

  let item = document.getElementById("item").value;
  let amount = document.getElementById("amount").value;

  let data = {
    item: item,
    amount: amount,
  };
  console.log(data)

  fetch("http://localhost:4500/addItems", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((ress) => {
        if(Number(ress.amount)<1) return;
       items.push(ress) 
       items.forEach(el =>{
        ul.innerHTML="";
        let li = document.createElement("li")
          li.innerHTML = `${el.item} : ${el.amount}`;
          ul.appendChild(li)
       })
    })
    .catch(e => console.log(e));
}
