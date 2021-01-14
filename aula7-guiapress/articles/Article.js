const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug:{
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

// Relacionamento de mão dupla
Category.hasMany(Article); //Uma categoria tem muitos artigos (1-N)
Article.belongsTo(Category); //Um artigo pertence a uma categoria (1-1)

// Sincronizar o model com a tabela no banco de dados - rodar 1 vez
// Article.sync({force: true});

module.exports = Article;