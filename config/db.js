const Seequlize = require('sequelize');

const db = new Seequlize('glitztec_recharge', 'glitztec_recharge', 'Boonnet@#12312', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;