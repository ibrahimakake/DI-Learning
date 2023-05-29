/*🌟 Exercise 1: Timer

Instructions

Using this HTML code:

<!DOCTYPE html>
    <html>
    <head>
        <style>
        p {
          background: yellow;
          color: red;
        }
        </style>
    </head>
    <body>
        <div id="container"></div>
        <button id="clear">Clear Interval</button>
    </body>
    </html>


Part I

In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World”.


Part II

In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


Part III

In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">. */

let div = document.getElementById("container")

setTimeout(function welcome(){
    
    alert("Hello World")
   
},2000)

setTimeout(function(){
       
        let p = document.createElement("p")
        div.appendChild(p)
        p.innerHTML="Hello Word"
},2000)

function clear() {
    let stopFunction = setInterval(function() {
        let p = document.createElement("p");
        div.appendChild(p);
        p.innerHTML = "Hello World";
        if (div.childNodes.length === 5) {
            clearInterval(stopFunction);
        }else{
            p.innerHTML
        }
    }, 2000);
}


 clear()

/*let stop = document.getElementById("clear")
stop.addEventListener("click",function(){
       clearInterval(stopFunction)
})*/