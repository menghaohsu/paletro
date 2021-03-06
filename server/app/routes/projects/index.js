'use strict';
var router = require('express').Router();
module.exports = router;
var db = require('../../../db')
var Project = db.model('project')
var Element = db.model('element')

router.get('/', function(req,res,next){
	Project.findAll({
		where: {
			userId: req.user.id
		},
		order: '"updatedAt" DESC'
	})
	.then(function(projects){
		res.send(projects);
	})
	.catch(next);
})

router.post('/create', function(req,res,next){
	Project.create(req.body)
	.then(function(project){
		project.setUser(req.user.id)
		res.json(project);
	})
	.catch(next);
})

router.get('/:id', function(req,res,next){
	Project.findAll({
		where: {
			id: req.params.id,
			userId: req.user.id
		},
		include: [Element]
	})
	.then(function(project){
		res.send(project);
	})
	.catch(next);
})

router.put('/:id', function(req,res,next){
	return Project.update(req.body, { where: {id: req.params.id} })
	.then(function(project){
		res.json(project);
	})
	.catch(next)
})

router.delete('/:id', function(req,res,next){
	Project.destroy({
		where: { id: req.params.id }
	})
	.then(function(){
		res.sendStatus(200);
	})
	.catch(next)
})