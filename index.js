const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection')

// Controllers
const CategoriesController = require('./categories/CategoriesController');
const ArticlesController = require('./articles/ArticleController');

// Model
const CategoriesModel = require('./categories/categorie');
const ArticleModal = require('./articles/article');

// View engine
app.set('view engine', 'ejs');

// Arquivos estaticos
app.use(express.static('public'))


// Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// database
connection
    .authenticate()
    .then( () => {
        console.log('Conexão com banco feita!')
    }).catch( () => console.log('Conexão com banco deu erro!'))


app.get('/', (req, res) => {
    res.render('index')
})


// Rotas controller
app.use('/', CategoriesController);
app.use('/', ArticlesController)

app.listen(3002,  () => {
    console.log('Servidor Up!')
})