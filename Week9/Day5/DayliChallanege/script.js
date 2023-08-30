/*You will create a currencies converter:

image




In this application we’re going receive data from two asynchronous sources.

You will use :

This documentation
Create your own API key by signing up - you will be able to make more requests :)


Note

The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation. 
Hint: You could also supply an optional AMOUNT variable in the query of the request.

Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted. 
Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.
switch conversion arrow(1) */


/*GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP

GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT

GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/codes

{
	"result": "success",
	"documentation": "https://www.exchangerate-api.com/docs",
	"terms_of_use": "https://www.exchangerate-api.com/terms",
	"time_last_update_unix": 1585267200,
	"time_last_update_utc": "Fri, 27 Mar 2020 00:00:00 +0000",
	"time_next_update_unix": 1585270800,
	"time_next_update_utc": "Sat, 28 Mar 2020 01:00:00 +0000",
	"base_code": "EUR",
	"target_code": "GBP",
	"conversion_rate": 0.8412,
	"conversion_result": 5.8884
}

{
	"result": "error",
	"error-type": "unknown-code"
}


const URL = 'https://v6.exchangerate-api.com/v6/key/latest/USD'





    const Key = 'c66dd621cf1fb80933f23c3c'

const URL = 'https://v6.exchangerate-api.com/v6/key/codes'

fetch(URL).then(resp => resp.json()).then(data=> data).catch(err => console.log(err))





*/



const select1 = document.getElementById("select1")
const select2 = document.getElementById("select2")
let input = document.getElementsByName('input1')

 let amount = input.value
 let option1 = select1.options[0]
 let option2 = select2.options[0]


 fetchDataSelected1()
fetchDataSelected2()


let button = document.getElementById("button")
button.addEventListener("click", function Convert(option1,option2,amount){
    const Key = '3dfa795c8b42c020a04827bb'
    const API =` https://v6.exchangerate-api.com/v6/${Key}/pair/${option1}/${option2}/${amount}`

    fetch(API)
    .then(response => response.json())
    .then((data)  => {
      //let Display = document.getElementById("display")
     // Display.innerHTML = data.conversion_result
         console.log(data.conversion_result)
      })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
})







const API = 'https://v6.exchangerate-api.com/v6/${Key}/pair/EUR/GBP/AMOUNT'



function fetchDataSelected1(){

    const Key = '3dfa795c8b42c020a04827bb'
    const apiUrl = `https://v6.exchangerate-api.com/v6/${Key}/codes`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => data.supported_codes.forEach(element => {
        let option = document.createElement('option')
        option.value = element
        option.innerHTML = element
        select1.appendChild(option)
       

      })
        )
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }

    function fetchDataSelected2(){

        const Key = '3dfa795c8b42c020a04827bb'
        const apiUrl = `https://v6.exchangerate-api.com/v6/${Key}/codes`;
        
        fetch(apiUrl)
          .then(response => response.json())
          .then((data) => data.supported_codes.forEach(element => {
            let option = document.createElement('option')
            option.value = element
            option.innerHTML = element
            select2.appendChild(option)
           
    
          })
            )
          .catch(error => {
            console.error('Error fetching data:', error);
          });
        }



        
