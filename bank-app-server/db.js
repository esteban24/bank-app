/*var mysql = require('mysql');
var config = require('config');
var dbConfig = config.get('MySQL.config');

var connection = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    database : dbConfig.name,
    password : dbConfig.password
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;*/

const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const Charge = sequelize.import(__dirname + "/model/charge");

module.exports = Charge;