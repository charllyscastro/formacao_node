const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
  res.send('Pagina artigo');
});

module.exports = router;