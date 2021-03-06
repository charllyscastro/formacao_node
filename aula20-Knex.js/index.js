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
/*Join com Where
database.select(["games.*", "estudios.nome as estudio_nome"])
        .table("games")
        .innerJoin("estudios","estudios.game_id","games.id")
        .where("games.id",5)
        .then(data => {
          console.log(data);
      }).catch(err => {
          console.log(err);
      })
*/
/*Relacionamento de 1 para N
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios","estudios.game_id","games.id")
  .then(data => {
    let game = {
      id: 0,
      nome: "",
      estudios: []
    }

    game.id = data[0].id;
    game.nome = data[0].nome;

    data.forEach(estudio => {
     game.estudios.push({nome: estudio.estudio_nome});
    })

    console.log(game);
    
}).catch(err => {
    console.log(err);
})
*/
/*Realcionamento many to many
database.select(["estudios.nome as estudio_nome", "games.nome as game_nome", "games.preco"])
        .table("games_estudios")
        .innerJoin("games","games.id","games_estudios.game_id")
        .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
        .where("estudios.id", 2)
        .then(data => {       
          console.log(data);
        })
        .catch(err => {
          console.log(err)
        })
*/
/*Transaction
async function transacao(){
  try{
    await database.transaction(async trans => {
      await trans.insert({nome: "Pyxerelia"}).table("estudios");
      await trans.insert({nome: "Mojang"}).table("estudios");
      await trans.insert({nome: "GearBox"}).table("estudios");
    })
  }catch(err){
    console.log(err)
  }
}
transacao();
*/