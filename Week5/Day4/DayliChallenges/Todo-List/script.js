/*Instructions

to do list



Recreate the todo list above:

Create an HTML, CSS and a JS file.

In the HTML file
create a form with one input type="text", and a “Submit” button.
add an empty div below the form 
<div class="listTasks"></div>

In the js file, you must add the following functionalities:
Create an empty array : const tasks = [];

Create a function called addTask(). As soon as the user clicks on the button:
check that the input is not empty,
then add it to the array (ie. add the text of the task)
then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
Each new task added should have (starting from left to right - check out the image at the top of the page)
a “X” button. Use font awesome for the “X” button.
an input type="checkbox". The label of the input is the task added by the user.

BONUS I (not mandatory):
Change the variable tasks to an array of task objects.
Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

BONUS II (not mandatory):
Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.
*/


//let button = document.getElementById("button")

let input = document.getElementById("input")

let form = document.forms[0]

let listTasks = document.getElementsByClassName("listTaks")[0]

let form2= document.forms.form2

//let p = document.getElementById("displayTasks")


form.addEventListener("submit",addTasks)



function addTasks(e){
    
    e.preventDefault()
    let tasks = [];
    
   
   
   if(input.value !== ""){
       tasks.push(input.value)
    }
    
    
    for(let task of tasks){ 
        let divForm = document.createElement("div")
        divForm.setAttribute("class","divForm")
        let form3= document.createElement("form")
        document.body.appendChild(form3)
        let label = document.createElement("label")
        label.setAttribute("id","label")
        let input2 = document.createElement("input")
        input2.setAttribute("type","checkbox")
        input.setAttribute("id","input2")
        let i = document.createElement("i")
        i.setAttribute("class","fa-sharp fa-solid fa-circle-xmark")
        form3.appendChild(i)
        form3.appendChild(input2)
        form3.appendChild(label)
        label.innerHTML= task
        
       // let icon = document.createElement("p")
       
        
        //listTasks.appendChild(icon)
        
        
        
    }
    input.value = "";
  
}
 



   