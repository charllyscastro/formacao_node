const express = require('express');
const router = express.Router();
const Users = require('./Users');
const bcrypt = require('bcryptjs');

router.get('/admin/users', (req, res) => {
  res.send('Listagem de usuarios');
});

router.get('/admin/users/create', (req, res) => {
  res.render('admin/users/create');
});

router.post('/users/create', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!password){
    res.redirect('/admin/users/create');
  }else{
    Users.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if(user == undefined){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
  
        Users.create({
          email: email,
          password: hash
        }).then(() => {
          res.redirect('/');
        }).catch((err) => {
          res.redirect('/');
        });
  
      }else{
  
        res.redirect('/admin/users/create');
      }
    });
  }
 
});

module.exports = router;