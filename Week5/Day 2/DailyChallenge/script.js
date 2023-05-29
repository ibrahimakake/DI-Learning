
let form = document.forms.libform

let  noun = form.elements.noun
let  adjective = form.elements.adjective
let  person = form.elements.person
let  verb = form.elements.verb
let  place = form.elements.place

form.addEventListener("submit",Lib)

function Lib(e){
    e.preventDefault()
    let nounV = noun.value;
    let adjectiveV = adjective.value;
    let personV = person.value;
    let verbV = verb.value;
    let placeV = place.value;

    let inputs = document.querySelectorAll("input")
 for(let input of inputs){
       if(input.value===""){
        alert("please fill  in all the blank inputs ")
     }

     /*for (let i= 0; i<inputs.length; i++ ){
        if(inputs[i].value==inputs[i].value){
            console.log(inputs[i].value)
        }
     }*/
     let story = document.getElementById("story")
     story.innerHTML= `Once upon a time, there was a ${nounV}named ${personV}. He was very  ${adjectiveV}. One day, he ${verbV}  a dragon. He rescued a princess and they lived happily ever after in a ${placeV}. ` 
 }
}



 let button = document.createElement("button")
 button.textContent = "shuffle"
document.body.appendChild(button)
button.addEventListener("click" ,shuffle)
function shuffle(e){
    e.preventDefault()
    let nounV = noun.value;
    let adjectiveV = adjective.value;
    let personV = person.value;
    let verbV = verb.value;
    let placeV = place.value;
    let stories = [`Once upon a time, there was a ${adjectiveV} cat named ${nounV}. She loved to play in the park. One day, she was playing fetch with her ${personV} when she saw a squirrel. She ${verbV} after the squirrel and ran into the woods. Suki had a lot of fun exploring the ${placeV}. She found a new place to play and she made new friends.`,
     `Once upon a time, there was a ${nounV}named ${personV}. He was very  ${adjectiveV}. One day, he ${verbV}  a dragon. He rescued a princess and they lived happily ever after in a ${placeV}. ` ,
     `Once upon a time, there was a ${nounV} named ${personV}. He was very  ${adjectiveV}. One day, he ${verbV} his cow for magic beans. He planted the beans in his ${placeV} and they grew into a giant beanstalk. He climbed the beanstalk and he killed a giant. He took the giant's gold and he became rich.`
   ]
   let randomStories = stories[Math.floor(Math.random()*stories.length)]
   let story = document.getElementById("story")
   story.innerHTML= randomStories
}


 
