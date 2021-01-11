const express = require('express');
const app = express();

// Usando o ejs para usar como view engine
app.set('view engine', 'ejs');

app.get('/:nome?/:lang?', (req, res) => {
  const nome = req.params.nome;
  const lang = req.params.lang;
  const msg = false;
  const produtos = [
    {nome: 'lapis', preco: 1},
    {nome: 'caderno', preco: 5},
    {nome: 'mochila', preco: 10}
  ];
  res.render('index',{
    nome: nome, 
    lang: lang,
    msg,
    produtos
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado');
});