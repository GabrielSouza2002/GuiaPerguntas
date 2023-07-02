const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'