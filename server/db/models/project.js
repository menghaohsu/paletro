var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('project',{
    name: {
        type: Sequelize.STRING
    }
});