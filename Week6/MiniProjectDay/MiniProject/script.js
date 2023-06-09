let objects = [
    {id:0, author:"Walt Disney", quote:"If you can dream it, you can do it"},
    {id:1,author:"Unknown",quote:"If you want something you've never had, you must be willing to do something you've never done"},
    {id:2,author:"Barack Obama",quote:"Don't let anyone tell you what you can't do. Follow your dreams and persist."},
    {id:3,author:"Napoleon Hill",quote:"Life is what we make it and how we make it – whether we realize it or not."},
    {id:4,author:"Napoleon Hill",quote:"Lifejhfhjft anhgjfhghgf"}

]

let section= document.getElementById("section")
let button = document.getElementById("button")
button.addEventListener("click",generateQuote)

let h3 = document.getElementById("text-quote")
function generateQuote(e){
    e.preventDefault()
     var Quote;
     var randomId;
    do{
        randomId = Math.floor(Math.random() * objects.length)
        Quote = objects[randomId]
    } while(h3.innerHTML == Quote.quote)

    h3.innerHTML = Quote.quote
    
}

let button2 = document.getElementById("button2")
let addQuote = document.getElementById("quote")
let addAutor = document.getElementById("author")

button2.addEventListener("click",addNewQuote)

function addNewQuote(e){
    e.preventDefault()
   let authorValue = addAutor.value;
   let quoteValue = addQuote.value;

   if(quoteValue === "" && authorValue===""){
    alert("please fill the field")

   }
   else{
      var newQuote = {}
      newQuote.author= authorValue
      newQuote.quote= quoteValue
      newQuote.id= objects.length 
      objects.push(newQuote)

   }
}
let spaceNOC =document.getElementById("spaceNumberOfCharacter")
let noSpaceNOC =document.getElementById("noSpaceNumberOfCharacter")
let numberOfWord = document.getElementById("numberOfWord")
let like = document.getElementById("like")

spaceNOC.addEventListener("click",spaceNumberOfCharacter)

function spaceNumberOfCharacter(e){
    e.preventDefault()
    let span1 = document.getElementById("description1")
    let character1 = h3.innerHTML
    span1.innerHTML = `The number of character with space inside the quote is ${character1.length} `

}
noSpaceNOC.addEventListener("click",noSpaceNumberOfCharacter)
function noSpaceNumberOfCharacter(e){
       e.preventDefault()
       let span2 = document.getElementById("description2")
       let character2 = h3.innerHTML
       let character22= character2.replace(/ /g,"");
       span2.innerHTML= ` The number of character without space inside the quote is ${character22.length}`
}

numberOfWord.addEventListener("click",numberOfWords)

function numberOfWords(e){
      e.preventDefault()
      let span3 = document.getElementById("description3")
      let character3 = h3.innerHTML
      let character33 = character3.split(" ");  
      console.log(character33)   
       span3.innerHTML= `The number of word in the quote is ${character33.length}`
    }
    
    
  like.addEventListener("click",likes) 
   function likes(e){
   
    e.preventDefault()
    var existingQuote = h3.textContent

    if(existingQuote != ""){

        objects.forEach( (element) => {
            
            if(existingQuote == element.quote){

                let span4 = document.getElementById("description4") 

                if(element.like == undefined){ 
                    element.like = 1
                    span4.innerHTML = `The number of like of this quote is : ${element.like}`
                }else{ 
                  span4.innerHTML =  ++x.like
                  span4.innerHTML = `The number of like of this quote is : ${++x.like}`
                }
             }

        })

    }

    let span4 = document.getElementById("description4")
    let character4 = h3.innerHTML
    let character44 = character4
   }
 
   let buutton = document.getElementById("displayAuthorQuote")
   buutton.addEventListener("click",generateAuthorQuote)
   function generateAuthorQuote(e){
    e.preventDefault()
    let authorName = document.getElementById("authorQuote").value
    let h4 = document.getElementById("displayAuthor")
    if(authorName!= ""){
    var tempQuote = []
        objects.forEach((val) => {
            if(val.author == authorName) {
                tempQuote.push(val)
            }
        })

       for (let x of tempQuote){
         h4.innerHTML += "<p> "+x.quote+"</p>"
       }
    }


   }

   let previousButton = document.getElementById("previous")
   let nextButton = document.getElementById("next")

   previousButton.addEventListener("click",function(e){
   e.preventDefault()

   objects.forEach(function(element,index,array){
    if (h3.innerHTML == array[index].quote) h3.innerHTML == array[index-1].quote
   })

   })

   nextButton.addEventListener("click",function(e){
    e.preventDefault()
 
    objects.forEach(function(element,index,array){
     if (h3.innerHTML == array[index].quote) h3.innerHTML == array[index+1].quote
    })
 
    })
 


   