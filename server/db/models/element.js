var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('element', {
    type: {
        type: Sequelize.STRING
    },
    left: {
        type: Sequelize.INTEGER
    },
    top: {
        type: Sequelize.INTEGER
    },
    width: {
        type: Sequelize.INTEGER
    },
    height: {
        type: Sequelize.INTEGER
    }
});