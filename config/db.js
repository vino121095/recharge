const Seequlize = require('sequelize');

const db = new Seequlize('glitztec_recharge', 'glitztec_recharge', 'Boonnet@#12312', {
    host: "localhost",
    dialect: "mysql",
    timezone: '+00:00'
});

module.exports = db;
