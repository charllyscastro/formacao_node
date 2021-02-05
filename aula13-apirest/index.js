const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


let DB = {
  games: [
    {
      id:23,
      title: 'Call od duty',
      year: 2019,
      price: 60
    },
    {
      id:65,
      title: 'Sea of thieves',
      year: 2018,
      price: 40
    },
    {
      id:2,
      title: 'Minecraft',
      year: 2012,
      price: 20
    }
  ]
}

app.get('/games',  (req, res) => {
  const games =  DB.games;
  res.statusCode = 200;
  res.json(games);
});


app.get('/games/:id', (req, res) => {
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

app.post('/games',(req, res) => {
  const {title, year, price} = req.body;

  DB.games.push({
    id: 2323,
    title: title,
    year: year,
    price: price
  });

  res.sendStatus(200);
});

app.delete('/games/:id',(req, res) => {
  
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

app.put('/games/:id',(req, res) => {
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

app.listen(3000, () => {
  console.log('Servidor rodando');
});