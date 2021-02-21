const database = require('./database');

const dados = [
  {
    nome: 'Call of duty',
    preco: 50.56
  }
]

/** Insert
 database.insert(dados).into('games').then(data => {
   console.log(data);
 }).catch(err => {
   console.log(err);
 });
 */