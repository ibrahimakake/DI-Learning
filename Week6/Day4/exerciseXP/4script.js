/**🌟 Exercise 4 : Welcome

Instructions

John has just signed in to your website and you want to welcome him.

Create a Bootstrap Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture.


 */
/*

(function(userName){
    let div = document.createElement("div")
   let image =  document.createElement("img")
   image.src="johnDumelo.png"
   div.appendChild(image)

    let h4 = document.createElement("h4").innerHTML = userName
    div.appendChild(h4)

    document.getElementById("navbar").appendChild(div)

})("Ibrahima")
function addUserToNavbar(userName) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let image = document.createElement("img");
    image.src = "image.png";
    div1.style.width = "50%";
    div1.style.height = "50%";
    div2.appendChild(image);
    div1.appendChild(div2)
  
    let h4 = document.createElement("h4");
    h4.textContent = userName;
    div1.appendChild(h4);
  
    document.getElementById("navbar").appendChild(div1);
  }
  
  addUserToNavbar("Ibrahima");*/

  (function addUserToNavbar(userName) {
    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.src = "image.png";
    //div1.style.width = "50%";
   // div1.style.height = "50%";
   // div1.style.display = "block";
    div1.appendChild(image);
  
    let h4 = document.createElement("h4");
    h4.textContent = userName;
    div1.appendChild(h4);
  
    document.getElementById("navbar").appendChild(div1);
  })(`welcome John Dumelo`);
  
  