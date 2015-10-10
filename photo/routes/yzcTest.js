var express = require('express');
var router = express.Router();
var numbers=[];
numbers.push('1');
numbers.push('3');
numbers.push('5');
numbers.push('7');

router.get('/show',function  (req,res) {
	res.render('showNumbersTest',{
		title:'yzc',
		numbers:numbers
	});
	// body...
});
module.exports = router;