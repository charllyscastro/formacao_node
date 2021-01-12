const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Usando o ejs para usar como view engine
app.set('view engine', 'ejs');
// Utilizando arquivos estaticos
app.use(express.static('public'));
// Usando bodyParser para decodificar os dados do formulário
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Usando json

//Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta',(req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  res.send(`${titulo} ${descricao}`)
});

app.listen(3000, () => {
  console.log('Servidor iniciado');
});