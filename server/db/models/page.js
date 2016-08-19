var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('page',{
    name: {
    	type: Sequelize.STRING,
      defaultValue: 'Untitled Project'
    },
    bgcolor: {
      type: Sequelize.STRING
    },
    bgshade: {
      type: Sequelize.STRING
    }
}); 
