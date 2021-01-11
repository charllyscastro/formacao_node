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

// parâmetro não obrigatorio
app.get('/blog/:artigo?', (req, res) => {
  const artigo = req.params.artigo;
  artigo ? res.send(`Artigo: ${artigo}`) : res.send(`Artigo: Parâmetro não obrigatório.`)
  
});

app.listen(3000, (error) => {
  if(error){
    console.log('Servidor não foi iniciado.')
  }else{
    console.log('Servidor rodando.')
  }
})