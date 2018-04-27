var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shoppingB');
mongoose.Promise =global.Promise;

var products = [
		new Product({
		   imagePath:'https://aisgaming.files.wordpress.com/2015/12/12gxn.png?w=760',
		   title: 'Bangladeshi game1',
		   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, ',
		   price: 20 
		}),
		new Product({
		   imagePath:'https://aisgaming.files.wordpress.com/2015/12/12gxn.png?w=760',
		   title: 'Bangladeshi  game2',
		   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, ',
		   price: 17 
		}),
		new Product({
		   imagePath:'https://aisgaming.files.wordpress.com/2015/12/12gxn.png?w=760',
		   title: 'Bangladeshi game3',
		   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
		   price: 15 
		}),
		new Product({
		   imagePath:'https://aisgaming.files.wordpress.com/2015/12/12gxn.png?w=760',
		   title: 'Bangladeshi game4',
		   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, ',
		   price: 30 
		}),
		new Product({
		   imagePath:'https://aisgaming.files.wordpress.com/2015/12/12gxn.png?w=760',
		   title: 'Bangladeshigame5',
		   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, ',
		   price: 23 
		}),
		new Product({
		   imagePath:'https://aisgaming.files.wordpress.com/2015/12/12gxn.png?w=760',
		   title: 'Bangladeshi game5',
		   description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, ',
		   price: 25 
		}),
	];

// for manually save 
var done = 0;
	for (var i =0; i< products.length; i++) {
		products[i].save(function(err,result) {
			done++;
			if(done===products.length){
				exit();
			}
		});
	}
function exit() {
	mongoose.disconnect();
}