const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// Controllers
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

// Models
const Article = require('./articles/Article');
const Category = require('./categories/Category');

// View engine
app.set('view engine', 'ejs');

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

app.get('/', (req, res) => {
  Article.findAll().then(articles => {
    res.render('index', {
      articles: articles
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
      res.render('article',{
        article: article
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