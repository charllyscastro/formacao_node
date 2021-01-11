const express = require('express'); //Carrega os modulos do express
const app = express(); //Instancia o express

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/ola/:nome/:empresa', (req, res) => {
  const nome = req.params.nome;
  const empresa = req.params.empresa;
  res.send(`Oi! ${nome} ${empresa}`);
});

// Parâmetro não obrigatorio
app.get('/blog/:artigo?', (req, res) => {
  const artigo = req.params.artigo;
  artigo ? res.send(`Artigo: ${artigo}`) : res.send(`Artigo: Parâmetro não obrigatório.`);
});

// Query params
app.get('/youtube', (req, res) => {
  const canal = req.query['canal'];
  canal ? res.send(`Canal: ${canal}`) : res.send('Canal não encontrado!');
});

app.listen(3000, (error) => {
  if(error){
    console.log('Servidor não foi iniciado.')
  }else{
    console.log('Servidor rodando.')
  }
})