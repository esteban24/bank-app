var express = require('express');
var router = express.Router();
var models = require('../models')

router.get('/api/charges', function(req, res){
    models.Charge.findAll()
    .then(result => {
    	res.status(200).json(result);
	})
	.catch(err => {
		res.status(500).json({ status: 500, message: 'Internal server error' });
	});
});

router.post('/api/charges', function(req, res) {
	var charge = { description: req.body.description, amount: req.body.amount };

	models.Charge.create(charge)
	.then(result => {
		res.status(201).json({});
	})
	.catch(err => {
		res.status(500).json({ status: 500, message: 'Internal server error' });
	})
});

module.exports = router;
