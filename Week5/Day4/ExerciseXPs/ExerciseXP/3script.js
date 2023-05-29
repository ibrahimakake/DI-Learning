/*🌟 Exercise 3: Drag & Drop

Instructions

<!DOCTYPE html>
    <html>
    <head>
        <style>
        #target {
          width: 200px;
          height: 200px;
          position: relative;
          background: yellow;
        }
        #box {
          width: 50px;
          height: 50px;
          position: absolute;
          background-color: red;
        }
        </style>
    </head>
    <body>
        <div calss ="target" id="target"></div>
        <br>
        <div draggable = "true"  id="box"></div>
    </body>
    </html>


Copy the code above, to a structured HTML file.
In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.
 */


   document.addEventListener("dragstart", function(e) {
  e.dataTransfer.setData("item", e.target.id);
});

document.addEventListener("dragover", function(e) {
  if (e.target.className === "target") {
    e.preventDefault();
  }
});

document.addEventListener("drop", function(e) {
  e.preventDefault();
  if (e.target.className === "target") {
    let data = e.dataTransfer.getData("item");
    e.target.appendChild(document.getElementById(data));
  }
});

 
