//  不可用的用户更新程序
var connect=require('connect');
console.log(connect);
function edit(req,res,next){
	if('GET'!=req.method) return next;
	res.setHeader('Content-Type','text/html');
	res.write('<form method="put">');
	res.write('<input type="text" name="user[name]" value="Tobi" />');
	res.write('<input type="submit" value="Update" />');
	res.write('</form>');
	res.end();
}
function update(req,res,next){
	if('PUT'!=req.method) return next();
	res.end('Update name to '+req.body.user.name);
}
var app=connect();
app.use(connect.logger('dev'));
app.use(connect.bodyParser());
app.use(edit);
app.use(update);
app.listen(3000);