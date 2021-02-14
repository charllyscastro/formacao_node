const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

const JWTsecret = 'cb1504309d0615d14e062cfd2ed629a8';
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

function auth(req, res, next){
  const authToken = req.headers['authorization'];
  if(authToken != undefined){
    const bearer = authToken.split(' ');
    const token = bearer[1];
    jwt.verify(token, JWTsecret, (err, data) => {
      if(err){
        res.status(401);
        res.json({err: 'Token inválido'});
      }else{
        req.token = token;
        req.loggedUser = {id: data.id, email: data.email};
        next();
      }
    });

  }else{
    res.status(401);
    res.json({err: 'Token inválido'})
  }
}

let DB = {
  games: [
    {
      id:1,
      title: 'Call od duty',
      year: 2019,
      price: 60
    },
    {
      id:2,
      title: 'Sea of thieves',
      year: 2018,
      price: 40
    },
    {
      id:3,
      title: 'Minecraft',
      year: 2012,
      price: 20
    }
  ],
  users:[
    {
      id: 1,
      name: "fulano",
      email: "fulano@gmail.com",
      password: "123"
    },
    {
      id: 2,
      name: "ciclano",
      email: "ciclano@email.com",
      password: "123"
    }

  ]
}

app.get('/games',auth,  (req, res) => {

  const HATEOS = [
    {
      href: "http://localhost:3000/game/0",
      method: "DELETE",
      rel: "delete_game"
    },
    {
      href: "http://localhost:3000/game/0",
      method: "GET",
      rel: "get_game"
    },
    {
      href: "http://localhost:3000/auth",
      method: "POST",
      rel: "login"
    },

  ]
  const games =  DB.games;
  res.statusCode = 200;
  res.json({games: games, _links: HATEOS});
});


app.get('/games/:id',auth, (req, res) => {
  if(isNaN(req.params.id)){
    res.sendStatus(400);
  }else{
    const id = parseInt(req.params.id);
    
      const game = DB.games.find(game => game.id == id);
      if(game != undefined){
        res.statusCode = 200;
        res.json(game)
      }else{
        res.sendStatus(404);
      }   
  }
});

app.post('/games',auth,(req, res) => {
  const {title, year, price} = req.body;
  console.log(title)
  if(!title || !year ||!price){
    return;
  }

  DB.games.push({
    id: parseInt(DB.games.length) + 1,
    title: title,
    year: year,
    price: price
  });

  res.sendStatus(200);
});

app.delete('/games/:id',auth,(req, res) => {
  
  if(isNaN(req.params.id)){
    res.sendStatus(400);
  }else{
    const id = parseInt(req.params.id);
    const index = DB.games.findIndex(game => game.id == id);
    if(index == -1){
      res.sendStatus(404);
    }else{
      DB.games.splice(index,1);
      res.sendStatus(200);
    }  
  }
});

app.put('/games/:id',auth,(req, res) => {
  if(isNaN(req.params.id)){
    res.sendStatus(400);
  }else{
    const id = parseInt(req.params.id);
    const game = DB.games.find(game => game.id == id);
    if(game != undefined){
      const {title, price, year} = req.body;
      if(title != undefined){
        game.title = title;
      }
      if(price != undefined){
        game.price = price;
      }
      if(year != undefined){
        game.year = year;
      }

      res.sendStatus(200);
    
    }else{
      res.sendStatus(404);
    }   
    
  }
});

app.post('/auth', (req, res) => {
  const {email, password} = req.body;

  if(email != undefined){
    const user = DB.users.find(u => u.email == email);
    if(user != undefined){
      if(user.password == password){
        jwt.sign({id: user.id, email: user.email}, 
                  JWTsecret,
                  {expiresIn: '48h'}, (err, token) => {
          if(err){
            res.status(400);
            res.json({token: "falha interna"});
          }else{
            res.status(200);
            res.json({token: token});
          }
        });
      }else{
        res.status(401);
        res.json({err: "Crendenciais inválidas"});
      }

    }else{
      res.status(404);
      res.json({err: "E-mail não existe"});
    }

  }else{
    res.status(400);
    res.json({err: "Email inválido"});
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});