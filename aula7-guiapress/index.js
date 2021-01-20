const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const session = require('express-session');
require('dotenv').config()

// Controllers
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');
const usersController = require('./users/UsersController');

// Models
const Article = require('./articles/Article');
const Category = require('./categories/Category');
const Users = require('./users/Users');

// View engine
app.set('view engine', 'ejs');

//Sessions
app.use(session({
  secret: process.env.SESSION,
  cookie: {
    maxAge: 30000
  }
}));
// Arquivos estáticos
app.use(express.static('public'));

// Body parser - Formulários
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Conexão com o banco
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com sucesso!');
  }).catch((error) => {
    console.log(error);
  });

app.use('/', categoriesController);
app.use('/', articlesController);
app.use('/', usersController);

app.get('/', (req, res) => {
  Article.findAll({
    order: [
      ['id', 'DESC']
    ],
    limit: 4
  }).then(articles => {
    Category.findAll().then(categories => {
      res.render('index', {
        articles: articles,
        categories: categories
      });
    });
  });
});

app.get('/:slug', (req, res) => {
  const slug = req.params.slug;
  Article.findOne({
    where: {
      slug: slug
    }
  }).then(article => {
    if(article != undefined){
      Category.findAll().then(categories => {
        res.render('article', {
          article: article,
          categories: categories
        });
      });
    }else{
      res.redirect('/');
    }
  }).catch(err => {
    res.redirect('/');
  });
});

app.get('/category/:slug', (req, res) => {
  const slug = req.params.slug;
  Category.findOne({
    include: [{model: Article}],
    where: {
      slug: slug
    }
  }).then(category => {
    if(category != undefined){
      Category.findAll().then(categories => {
        res.render('index',{
          articles: category.articles,
          categories: categories
        });
      });
    }else{
      res.redirect('/');
    }
  }).catch(err => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado');
});