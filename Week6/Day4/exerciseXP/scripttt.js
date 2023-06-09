/*🌟 Exercise 3 : Fortune Teller

Instructions

Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


 */


    

(function (jobTittle,geographicLocation,partnerName, numberOfChildren){
console.log(`You will be a ${jobTittle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`)
})("Engineer", "New York", "Aicha", 5)




