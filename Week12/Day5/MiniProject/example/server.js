const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'file://' }));

let list = [];

app.post('/addItems', (req, res) => {
  const { item, amount } = req.body;
  if (Number(amount) < 1) return;
  let addToCard = getObject(item);
  if (addToCard === null) {
    const objectToSave = { item, amount: Number(amount) };
    list.push(objectToSave);
    res.send(objectToSave);
  } else {
    addToCard.amount += Number(amount);
    res.send(addToCard);
  }
});

let port = 4500;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});

function getObject(item) {
  return list.find((element) => element.item === item);
}
app.get('/addItems', (req, res) => {
    res.send(list);
})
