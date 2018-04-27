var express = require('express');
var router = express.Router();

var Products = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {
	Products.find(function(err,docs){
		res.render('./shop/index', { title: 'Shopping Cart', products:docs});
	});
});

module.exports = router;
