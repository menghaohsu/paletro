'use strict';
var router = require('express').Router();
module.exports = router;
var db = require('../../../db')
var Page = db.model('page')
var Element = db.model('element')

router.get('/:projectId/page', function(req,res,next){
	Page.findAll({
		where: {
			projectId: req.params.projectId
		}
	})
	.then(function(pages){
		res.send(pages);
	})
	.catch(next);
})

router.post('/:projectId/create', function(req,res,next){
	Page.create(req.body)
	.then(function(page){
		page.setProject(req.params.projectId)
		res.json(page);
	})
	.catch(next);
})

router.get('/:projectId/page/:id', function(req,res,next){
	Page.findAll({
		where: {
			projectId: req.params.projectId,
			id: req.params.id
		},
		include: [Element]
	})
	.then(function(page){
		res.send(page);
	})
	.catch(next);
})

router.put('/:projectId/page/:id', function(req,res,next){
	return Page.update(req.body, { 
		where: {
			id: req.params.id,
			projectId: req.params.projectId
		}})
	.then(function(page){
		res.json(page);
	})
	.catch(next)
})

router.delete('/:projectId/page/:id', function(req,res,next){
	Page.destroy({
		where: { 
			id: req.params.id,
			projectId: req.params.projectId
		}
	})
	.then(function(){
		res.sendStatus(200);
	})
	.catch(next)
})