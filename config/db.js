const Sequelize = require('sequelize');

const db = new Sequelize('recharge', 'root', 'pass12345', {
    host: '154.61.174.187',
    dialect: 'mysql',
    port: 3306, 
    timezone: '+00:00',
});

module.exports = db;
