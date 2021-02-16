const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser('123456'));
app.use(session({
  secret: 'Keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000}
}));

app.use(flash());

app.get('/', (req, res) => {
  let errorEmail = req.flash('errorEmail');
  let errorNome = req.flash('errorNome');
  let errorPontos = req.flash('errorPontos');
  let email = req.flash('email');
  let nome = req.flash('nome');
  let pontos = req.flash('pontos');

  errorEmail = (errorEmail == undefined || errorEmail.length == 0) ? undefined : errorEmail;
  errorNome = (errorNome == undefined || errorNome.length == 0) ? undefined : errorNome;
  errorPontos = (errorPontos == undefined || errorPontos.length == 0) ? undefined : errorPontos;
  email = (email == undefined || email.length == 0) ? '' : email;
  nome = (nome == undefined || nome.length == 0) ? '' : nome;
  pontos = (pontos == undefined || pontos.length == 0) ? '' : pontos;
  res.render('index', {errorEmail, errorNome, errorPontos, email, nome, pontos});
});

app.post('/form', (req, res) => {
  const { email, nome, pontos } = req.body;
  let errorEmail;
  let errorNome;
  let errorPontos;
  if(email == undefined || email == ''){
    errorEmail = 'Email obrigatório!';
  }
  if(nome == undefined || nome == ''){
    errorNome = 'Nome obrigatório!';
  }
  if(pontos == undefined || pontos <= 0){
    errorPontos = 'Pontos inválidos!';
  }

  if(errorEmail != undefined || errorNome != undefined || errorPontos != undefined){
    req.flash('errorEmail', errorEmail);
    req.flash('errorNome', errorNome);
    req.flash('errorPontos', errorPontos);
    req.flash('email', email);
    req.flash('nome', nome);
    req.flash('pontos', pontos);
    res.redirect('/');
  }else{
    res.send('Formulário aceito.');
  }
});
app.listen(3000, () => {
  console.log('Server UP!');
});