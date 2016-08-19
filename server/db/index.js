'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Project = require('./models/project');
var Page = require('./models/page');
var Element = require('./models/element');



User.hasMany(Project);
Project.belongsTo(User)
Project.hasMany(Page);
Page.hasMany(Element);

// db.sync()
// .then(function(){
// 	console.log('sync success')
// })
