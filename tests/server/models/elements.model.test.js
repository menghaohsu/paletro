var sinon = require('sinon');
var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var Project = db.model('project');

describe('Order model', function(){

	var newProject, newElement;
	beforeEach('Sync DB', function(){
		return Project.create({
			contents:'yoyo',
			name:'oyoy'
		})
		.then(function(project){
			newProject = project;
		})
		.then(function(){
			var element = {
				type: 'button',
				top: 24,
				left: 52,
				width: 19,
				height: 38,
				color: 'black',
				shade: 'original',
				url: 'http://cs4574.vk.me/u100144505/a_8e27641b.jpg'
			}
			return newProject.createElement(element)
		})
		.then(function(element){
			newElement = element;
		})
		.then(function(){
			return db.sync({ force: true })
		})
	})

	describe('when create an element', function(){
		var type = 'button';
		var color = 'black'
		it('the element should have correct type and color', function(){
			expect(newElement.type).to.be.equal(type);
			expect(newElement.color).to.be.equal(color)
		})
		it('check projectId existed', function(){
			expect(newElement.projectId).to.be.equal(newProject.id)
		})
	})
})