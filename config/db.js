const Seequlize = require('sequelize');

const db = new Seequlize('recharge', 'root', 'pass12345', {
    host: "localhost",
    dialect: "mysql"
});


module.exports = db; 

