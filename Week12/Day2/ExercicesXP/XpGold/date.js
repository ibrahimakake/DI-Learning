/*Exercise 1: Date #1

In a new file called date.js, create a function that returns the amount of time left from now until January 1st. Export this function.

In the file script.js display the result of the function created in date.js.
(Example: the 1st January is in 10 days and 10:34:01 hours)


 let now = new Date();
let january_1st = new Date(now.getFullYear() +1,0,1);
let time_left = new Date(january_1st - now);

function get_time_left_until_january_1st(){
 
  return ( `${time_left.getMonth()*30} days and ${time_left.getHours()}:${time_left.getMinutes()}:${time_left.getSeconds()}`)

}

module.exports = {
    get_time_left : get_time_left_until_january_1st
}
*/





/*Exercise 2 : Date #2

In a new file called date.js, create a function that accepts a birthdate as an argument (in the format of your choice), and then return the number of minutes the user lived in his life. Export this function.
Hint: Hardcode the value of the argument, don’t ask a user for it.

In the file script.js display the result of the function created in date.js.

Bonus: Try to find a node module that allows to prompt the user for his birthdate.*/
 
function display_how_many_minutes_you_have_lived (birthdate){
  let now_date = new Date();
  let your_date = new Date(birthdate);
  let minutes = (now_date.getTime() - your_date.getTime())/1000;
  minutes/=60
  
  return Math.abs(Math.round(minutes))
}

module.exports ={
minutesLived: display_how_many_minutes_you_have_lived
}








/*Exercise 3: Date #3

In a new file called date.js, write a function that returns today’s date and the amount of time left from now until the next holiday, additionally display what holiday that is. Export this function.
Hint: Start with hardcoding the datetime and name of the holiday.

In the file script.js display the result of the function created in date.js.
(Example: the next holiday is in 30 days and 12:03:45 hours)

Bonus : Try to find a node module to get the date of the holidays instead of hardcoding it.


const today = new Date();

const holidayName = 'Eid';

const getHolidayInfo = (nextHoliday) => {
  const timeLeft = new Date (nextHoliday)- today;
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft - (daysLeft * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft - (daysLeft * 1000 * 60 * 60 * 24) - (hoursLeft * 1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft - (daysLeft * 1000 * 60 * 60 * 24) - (hoursLeft * 1000 * 60 * 60) - (minutesLeft * 1000 * 60))/1000);
  return ` ${holidayName} is in ${daysLeft} days, ${hoursLeft}:${minutesLeft}:${secondsLeft}`;
};


module.exports={
  time_left :getHolidayInfo
}*/
