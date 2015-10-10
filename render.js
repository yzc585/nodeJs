var render= function  (str,data) {
	// body...
	var tpl=str.replace(/<%=([\s\S]+?)%>/g,function(match,code){
		console.log(match+"  matched");
		return "'+obj."+code+"+'";
	});
	console.log("1--"+tpl);
	tpl="var tpl='"+tpl+"'\n return tpl;";
	console.log("2--"+tpl);
	var compiled=new Function('obj',tpl);
	console.log("3--"+compiled);
	return compiled(data);
}
var tpl='Hello <%=username%>.<%=username2%>';
console.log(render(tpl,{username:'yzc',username2:"yu"}));