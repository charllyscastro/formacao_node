const express = require('express'); //Carrega os modulos do express
const app = express(); //Instancia o express

app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(3000, (error) => {
  if(error){
    console.log('Servidor não foi iniciado.')
  }else{
    console.log('Servidor rodando.')
  }
})