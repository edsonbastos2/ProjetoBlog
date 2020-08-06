const Sequelize = require('sequelize');

const Connection = new Sequelize('db_blog', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = Connection;