const fs = require('fs')

const characters = fs.readFileSync("RightLeft.txt","utf-8").split("")
console.log(characters)

console.log(typeof characters)


let position = 0

let leftorRight ;

characters.forEach((character) =>{
      if(character === '<'){
        position = position-1
       
      }else{
        position= position+1
       
      }
})

if(position>0){
leftorRight = 'To the left'
}else if(position<0){
  leftorRight = 'to the right'
}else{
   leftorRight = ''
}

console.log(`${Math.abs(position)} steps ${leftorRight}`)