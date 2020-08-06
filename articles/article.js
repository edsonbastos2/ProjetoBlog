const Sequelize = require('sequelize');
const connection = require('../database/connection');
const Category = require('../categories/categorie');


const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // Tem muitos
Article.belongsTo(Category); // Um para um 


module.exports = Article;