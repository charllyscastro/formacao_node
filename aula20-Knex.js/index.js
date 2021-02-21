const database = require('./database');

const dados = [
  {
    nome: 'Call of duty',
    preco: 50.56
  }
]

/** 
 * ---Insert---
 database.insert(dados).into('games').then(data => {
   console.log(data);
 }).catch(err => {
   console.log(err);
 });
 */
/*
//  ---Select---
async function index(){
  try{
    const resp =  await database.select(["nome", "preco"]).table("games")
    console.log(resp);
  }catch(err) {
    console.log(err);
  }
}
index();
*/
 
/*
---Nested queries
database.insert({nome: "Mists", preco: 25}).into('games').then(data => {
  database.select(["nome", "preco"]).table("games").then(data => {
    console.log(data);
   }).catch(err => {
    console.log(err);
   });
}).catch(err => {
  console.log(err);
});
*/


