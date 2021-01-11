const express = require('express');
const app = express();

// Usando o ejs para usar como view engine
app.set('view engine', 'ejs');
// Utilizando arquivos estaticos
app.use(express.static('public'));

app.get('/', (req, res) => {
 
  res.render('index');
});

app.listen(3000, () => {
  console.log('Servidor iniciado');
});