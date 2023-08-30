/*1st Challenge

Instructions

Use Promise.all
This function should accept an array of promises and return an array of resolved values. 
If any of the promises are rejected, the function should catch them.

Explain in a comment how Promise.all work and why you receive this output.

Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]
 */


  const promise1 = Promise.resolve(5);
const promise2 = 32;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Hello');
});

const promisesArray = [promise1, promise2, promise3];

Promise.all(promisesArray)
  .then(results => {
    console.log(results); 
  })
  .catch(error => {
    console.error(error); 
  });

  // Promise.all is a method that takes an array of promises as input and returns a new promise.
  // This new promise will be fulfilled with an array containing the resolved values of the input promises, in the same order as the input promises.






  
/*2nd Challenge

Instructions

You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

In the HTML file, create a form with 4 inputs:
the latitude and longitude of the first city
the latitude and longitude of the second city

Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
Hint : Use Promise.all() */





  document.getElementById('getSunrise').addEventListener('click', async () => {
    const parisLat = document.getElementById('parisLat').value;
    const parisLong = document.getElementById('parisLong').value;
    const nyLat = document.getElementById('nyLat').value;
    const nyLong = document.getElementById('nyLong').value;
  
    const parisResponse = fetch(`https://api.sunrise-sunset.org/json?lat=${parisLat}&lng=${parisLong}`)
      .then(response => response.json());
    
    const nyResponse = fetch(`https://api.sunrise-sunset.org/json?lat=${nyLat}&lng=${nyLong}`)
      .then(response => response.json());
  
    try {
      const [parisData, nyData] = await Promise.all([parisResponse, nyResponse]);
  
      const parisSunriseTime = parisData.results.sunrise;
      const nySunriseTime = nyData.results.sunrise;
  
      document.getElementById('parisTime').textContent = parisSunriseTime;
      document.getElementById('nyTime').textContent = nySunriseTime;
  
    } catch (error) {
      console.error(error);
    }
  });
  