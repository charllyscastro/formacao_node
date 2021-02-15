const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'Keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true}
}));

app.use(flash());

app.get('/', (req, res) => {
  res.send('Rodando.');
});

app.listen(3000, () => {
  console.log('Server UP!');
});