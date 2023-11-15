const Sequelize = require('sequelize');

const connection = new Sequelize('publicacoes','root','admin',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;