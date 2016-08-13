'use strict';
var router = require('express').Router();
module.exports = router;
var db = require('../../../db')
var Project = db.model('project')

router.get('/', function(req,res,next){
	
	return Project.findAll({
		where:{
			userId: req.params.userId
		}
	})
	.then(function(projects){
		res.json(projects);
	})
})

// router.get('/:id', function(req,res,next){
// 	return Project.findById(req.params.id)
// 	.then(function(project){
// 		res.json(project);
// 	})
// })

router.post('/', function(req,res,next){
	return Project.create(req.body)
	.then(function(project){
		res.json(project);
	})
})

router.put('/:id', function(req,res,next){
	return Project.update(req.body)
	.then(function(project){
		res.json(project);
	})
})