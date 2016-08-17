var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('element', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    top: {
        type: Sequelize.INTEGER
    },
    left: {
        type: Sequelize.INTEGER
    },
    width: {
        type: Sequelize.INTEGER
    },
    height: {
        type: Sequelize.INTEGER
    },
    color: {
        type: Sequelize.STRING
    },
    shade: {
        type: Sequelize.STRING
    },
    fontsize: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }


});