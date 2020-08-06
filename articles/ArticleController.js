const express = require('express');
const router = express.Router();

router.get('/article', (req, res) => {
    res.send('Testando página artigo')
});

router.get('/admin/articles/new', (req, res) => {
    res.send('Testando página admin artigo')
});

module.exports = router;