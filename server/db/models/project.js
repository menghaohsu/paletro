var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('project',{
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
}, {
  getterMethods: {
    lastUpdated: function () {
      let dateStr = this.updatedAt.toString();
      return dateStr.slice(0,3) + ',' + dateStr.slice(3, 15);
    }
  }
});