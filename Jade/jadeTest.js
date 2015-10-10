var jade=require('jade');
var fs=require('fs');
var template=fs.readFileSync('./template.jade');
var context={messages:[
	'you have logged in successfully.',
	'Welcome back!'
	]};
var fn=jade.compile(template);
console.log(fn(context));