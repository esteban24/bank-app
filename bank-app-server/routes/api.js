var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/api/charges', function(req, res){
    db.findAll().then(result => {
    	res.send(200, result);
	});
});

router.post('/api/charges', function(req, res) {
	var charge = { id: null, description: req.body.description, amount: req.body.amount, createdAt: new Date(), updatedAt: new Date()};

	db.create(charge).then(result => {
		res.send(201, {});
	})
});

module.exports = router;
