const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
const users = [];

app.get('/registerForm', (req, res) => {
  res.sendFile(__dirname + '/public/registerForm.html');
});

app.get('/loginForm', (req, res) => {
  res.sendFile(__dirname + '/public/loginForm.html');
});

app.post('/register', (req, res) => {
    console.log(req.body)
  const { name, lastName, email, username, password } = req.body;

  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) {
    return res.send('error1');
  }

  const newUser = {
    id: users.length + 1,
    name,
    lastName,
    email,
    username,
    password,
  };
  users.push(newUser);

  res.send('register');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.send('error2');
  }

  res.send('login');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
