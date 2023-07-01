   
   // const time_left = require('./date.js')

   //console.log(`The 1st January is in ${time_left.get_time_left()}`);


    const date = require('./date.js')

    
    //console.log(`You have lived ${ date.minutesLived('2003-04-05')} minutes.`)

    /*const prompt = require('prompt-sync')();
    const birthdate = prompt('What is your birthdate?');
    console.log(`You have lived ${ date.minutesLived(birthdate)} minutes.`)*/

    const prompt = require('prompt-sync')();
    const birthdate = prompt('What is your birthdate?');

    console.log(`The next holliday ${date.time_left(birthdate)}`)
    

   
    

   
   

