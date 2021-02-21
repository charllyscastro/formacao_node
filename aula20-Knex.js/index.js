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

/*Where
database.select().whereRaw("nome = 'Call of duty' OR preco > 25 ")
        .table('games').then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
*/

/*Raw
database.raw("SELECT * FROM games").then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
*/

/*Delete
database.where({id: 2}).delete().table('games').then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err)
  }) 
*/

database.where({id: 1}).update({preco: 50}).table('games').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})