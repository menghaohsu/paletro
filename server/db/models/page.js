var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('page',{
    name: {
    	type: Sequelize.STRING,
      defaultValue: 'Untitled Page'
    },
    bgcolor: {
      type: Sequelize.STRING
    },
    bgshade: {
      type: Sequelize.STRING
    }
}); 
