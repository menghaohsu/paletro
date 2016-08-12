'use strict';
var router = require('express').Router();
var Project = require('../../../db/models/project')
var Element = require('../../../db/models/project')
module.exports = router;

// router.get('/', function(req,res,next){
// 	return Element.findAll()
// 	.then(function(projects){
// 		res.json(projects);
// 	})
// })

router.get('/:id', function(req,res,next){
	return Element.findAll({
		where:{
			projectId: req.params.id
		}
	})
	.then(function(elements){
		res.json(elements);
	})
})

router.post('/', function(req,res,next){
	return Element.create(req.body)
	.then(function(project){
		res.json(project);
	})
})

router.put('/:id', function(req,res,next){
	return Element.update(req.body)
	.then(function(project){
		res.json(project);
	})
})