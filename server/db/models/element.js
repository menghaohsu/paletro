var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('element', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    left: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    top: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    width: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    height: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: true
    },
    shade: {
        type: Sequelize.STRING,
        allowNull: true
    }
});