

for( var i=0; i <= 15; i++){

    if (i % 2 === 0){
        console.log(i+" is odd")
    }
    else {
        console.log(i+" is even")
    }


}
//* RESUME DU COURS

var i = 17

while( i < 15 ){
    i++
    console.log(i)
}


do {
    i++
    console.log(i)
}while( i < 15 )



let object = { fname : "john", lname : "doe", }

for (let x in object){ 
    console.log(x)
    console.log(object[x])

}


let array =["john","sarah", 23, "rudolf", 34]

for (let x of array){ 
    console.log(x)

}




//EXERCISE 2

/*Write a JavaScript for loop that will go through the variable names.

if the item is not a string, pass.
if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.*/

let names =["john","sarah", 23, "Rudolf", 34]
for (let y in names){

   if(typeof names[y] != "string" ){
        continue;
   }

   if(names[y][0] !=  names[y][0].toUpperCase()){

    names[y] = names[y][0].toUpperCase() + names[y].slice(1)
   }

}

console.log(names)

/*Write a JavaScript for loop that will go through the variable names

if the item is not a string, go out of the loop.
if the item is a string, display it.*/

for( let y in names){
    if (typeof names[y] != "string"){
      
        break;
    }
    
        console.log( names[y])
    
    
}
