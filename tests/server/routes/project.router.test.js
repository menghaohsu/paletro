var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('Projects route', function(){

	var User, Project;

	beforeEach('Sync DB', function(){
		return db.sync({ force:true });
	});

	beforeEach('Create Project', function(){
		app = require('../../../server/app')(db);
        User = db.model('user');
	})
})