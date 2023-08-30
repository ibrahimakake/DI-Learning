const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs'); // Import EJS

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends : true}));


app.set('view engine', 'ejs'); // Set EJS as the view engine

const shoppingList = [];

app.post('/addItem', (req, res) => {
    console.log(req.body)
  const { item, amount } = req.body;
  shoppingList.push({ item, amount });
console.log(shoppingList)
  // Construct the HTML string for the list items
  const itemsHTML = shoppingList.map(item => `<li>${item.item} - ${item.amount}</li>`).join('');

  // Send the formatted list items as the response
  res.send(`<ul>${itemsHTML}</ul>`);
});


/*app.get('/shoppingList', (req, res) => {
  res.render('shoppingList', { shoppingList }); // Render the EJS template
});*/

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
