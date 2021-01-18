const express = require('express');
const router = express.Router();
const Users = require('./Users');

router.get('/admin/users', (req, res) => {
  res.send('Listagem de usuarios');
});

router.get('/admin/users/create', (req, res) => {
  res.render('users/create');
});

module.exports = router;