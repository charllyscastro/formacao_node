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

/*Update
database.where({id: 1}).update({preco: 50}).table('games').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
*/
/*OrderBY
database.select(["nome"]).table("games").orderBy("id", "desc").then(data => { //desc | asc
  console.log(data);
}).catch(err => {
  console.log(err);
})
*/
/*Associate inserts
database.insert({
  nome: "EA Sports",
  game_id: 5
}).table("estudios").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
*/
/*Relacionamento 1 para 1
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios","estudios.game_id","games.id")
  .then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/