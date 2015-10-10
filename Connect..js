var connect=require('connect');
function logger(req,res,next){
	console.log('%s %s',req.method,req.url);
	next();
}
function hello(req,res){
	res.setHeader('Content-Type','text/plain');
	res.end('hello world');
}
var app =connect();
app.use(logger);
app.use(hello);
app.listen(3000);
