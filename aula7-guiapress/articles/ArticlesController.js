const express = require('express');
const router = express.Router();
const Article = require('../articles/Article');
const Category = require('../categories/Category');
const slugify = require('slugify');

router.get('/admin/articles', (req, res) => {
  Article.findAll({
    include:[{model: Category}]
  }).then(articles => {
    res.render('admin/articles/index',{
      articles: articles
    });
  });
});

router.get('/admin/articles/new', (req, res) => {
  Category.findAll().then(categories => {
    res.render('admin/articles/new',{
      categories: categories
    });
  });
});

router.post('/articles/save', (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const category = req.body.category;
  
    Article.create({
      title: title,
      slug: slugify(title),
      body: body,
      categoryId: category
    }).then(() => {
      res.redirect('/admin/articles');
    });
  
});

router.post('/articles/delete', (req, res) => {
  const id = req.body.id;
  if(id != undefined){
    if(!isNaN(id)){
      Article
        .destroy({
          where: {
            id:id
          }
        }).then(() => {
          res.redirect('/admin/articles');
        });
    }else{
      res.redirect('/admin/articles');
    }
  }else{
    res.redirect('/admin/articles');
  }
});

router.get('/admin/articles/edit/:id', (req, res) => {
  const id = req.params.id;
  if(isNaN(id)){
    res.redirect('/admin/articles');
  }
  Article.findByPk(id,{
    include:[{model: Category}]
  }).then(article => {
    if(article != undefined){
      Category.findAll().then(categories => {
        res.render('admin/articles/edit',{
          article: article,
          categories: categories
        });
      });
      
    }else{
      res.redirect('/');
    }
  }).catch(error => {
    res.redirect('/');
  })
});

router.post('/articles/update', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const body = req.body.body;
  const category = req.body.category;
  Article.update({
      title: title,
      slug: slugify(title),
      body: body,
      categoryId: category
  
  },{
    where:{
      id:id
    }
  }).then(() => {
    res.redirect('/admin/articles');
  }).catch(err => {
    res.redirect('/');
  });
});

router.get('/articles/page/:num', (req, res) => {
  const page = req.params.num;
  let offset = 0;
  if(isNaN(page) || page == 1){
    offset =0;
  }else{
    offset = parseInt(page)*2;
  }

  Article.findAndCountAll({
    order: [
      ['id', 'DESC']
    ],
    limit: 4,
    offset: offset
  }).then(articles => {
    let next;
    if(offset + 4 >= articles.count){
      next= false
    }else{
      next= true
    }
    const result = {
      page: parseInt(page),
      next: next,
      articles: articles
    }

    Category.findAll().then(categories => {
      res.render('admin/articles/page', {
        result: result,
        categories: categories
      })
    });
    
  });
});

module.exports = router;