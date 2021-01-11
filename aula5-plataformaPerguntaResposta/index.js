const express = require('express');
const app = express();

// Usando o ejs para usar como view engine
app.set('view engine', 'ejs');

app.get('/:nome?/:lang?', (req, res) => {
  const nome = req.params.nome;
  const lang = req.params.lang;
  res.render('index',{
    nome: nome, 
    lang: lang
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado');
});