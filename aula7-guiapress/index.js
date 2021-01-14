const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// View engine
app.set('view engine', 'ejs');

// Arquivos estáticos
app.use(express.static('public'));

// Body parser - Formulários
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Conexão com o banco
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com sucesso!');
  }).catch((error) => {
    console.log(error);
  });

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Servidor iniciado');
});