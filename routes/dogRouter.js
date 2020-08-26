const express = require('express');
const bodyParser = require('body-parser');
const Dog = require('../models/dog');

const dogRouter = express.Router();

dogRouter.route('/')
	.get((req, res, next) => {
		Dog.find()
		.then(dogs => {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(dogs);
		})
		.catch(err => next(err));
	});

dogRouter.route('/:dogId')
	.get((req, res, next) => {
		Dog.findById(req.params.dogId)
		.then(dog => {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(dog);
		})
		.catch(err => next(err));
	});

module.exports = dogRouter;