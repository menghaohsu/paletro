var sinon = require('sinon');
var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var User = db.model('user');

describe('Order model', function(){

	var newUser, newProject;
	beforeEach('Sync DB', function(){
		return User.create({
			firstName: 'Paul',
			lastName: 'Hsu',
			email: 'foo@fsa.com',
			password: '123guessme'
		})
		.then(function(user){
			newUser = user;
		})
		.then(function(){
			var project = {
				name: 'yoyo',
				contents: 'oyoy'
			};
			return newUser.createProject(project)
		})
		.then(function(project){
			newProject = project;
		})
		.then(function(){
			return db.sync({ force: true })
		});
	});

	describe('when user create order', function(){
		var name = 'yoyo';
		var contents = 'oyoy';
		it('project should have correct name and contents', function(){
			expect(newProject.name).to.be.equal(name);
			expect(newProject.contents).to.be.equal(contents);
		}) 
		it('check userId existed', function(){
			expect(newProject.userId).to.be.equal(newUser.id)
		})
	})

})