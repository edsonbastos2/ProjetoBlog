const express = require('express');

const router = express.Router();

router.get('/categories', (req, res) => {
    res.send('Testando página Categoria')
});

router.get('/admin/categories/new', (req, res) => {
    res.send('Testando página admin categoria')
})

module.exports = router;