const Sequelize = require('sequelize');
const connection = require('../database/database');

const Users = connection.define('users',{
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

//Users.sync({force: false}); //Cria a tabela ao executar o programa

module.exports = Users;