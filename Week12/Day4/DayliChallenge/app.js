const express = require('express');
const path = require('path');
const bp = require('body-parser')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(bp.urlencoded({ extended: true }));

app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;

  if (typeof hobby !== String) {
    return res.status(404).send('Hobby parameter should be a string.');
  }

  res.send(`One of my hobbies is: ${hobby}`);
});

app.get('/pic', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pic.html'));
  });
  
  app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.post('/formData', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  res.send(`${email} sent you a message: "${message}"`);
});

  
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
