const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

// Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados!')
  })
  .catch((msgErro) => {
    console.log(msgErro)
  })


// Usando o ejs para usar como view engine
app.set('view engine', 'ejs');
// Utilizando arquivos estaticos
app.use(express.static('public'));
// Usando bodyParser para decodificar os dados do formulário
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Usando json

//Rotas
app.get('/', (req, res) => {
  Pergunta.findAll({raw: true, order:[
    ['id','DESC'] // ASC = Crescente || DESC = Descrescente
  ]}).then( perguntas => {
    res.render('index', {
      perguntas
    });
  });
  
});

app.get('/perguntar', (req, res) => {
 
  res.render('perguntar');
});

app.post('/salvarpergunta',(req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  if(titulo){
    Pergunta.create({
      titulo,
      descricao
    }).then(() => {
      res.redirect('/');
    }).catch((msgErro) => {
      console.log(msgErro);
    })
  }else{
    res.redirect('/perguntar');
  }
   
});

app.get('/pergunta/:id', (req, res) => {
  const id = req.params.id;
  Pergunta.findOne({
    where: {id:id}
  }).then(pergunta => {
    if(pergunta != undefined){
      Resposta.findAll({
        raw: true, order:[
          ['id','DESC'] // ASC = Crescente || DESC = Descrescente
        ],
        where: {perguntaId:pergunta.id}
      }).then(respostas => {
        res.render('pergunta',{
          pergunta: pergunta,
          respostas: respostas
        });
      });
      
    }else{
      res.redirect('/');
    }
  })
});

app.post('/responder', (req, res) => {
  const corpo = req.body.corpo;
  const perguntaId = req.body.pergunta;
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect('/pergunta/' + perguntaId);
  }).catch((msgErro) => {
    console.log(msgErro);
  })
})

app.listen(3000, () => {
  console.log('Servidor iniciado');
});