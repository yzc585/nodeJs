var dgram=require('dgram');
var message=new Buffer("yu zhi chao");
var client=dgram.createSocket("udp4");
client.send(message,0,message.length,41234,"localhost",function  (err,bytes) {
	// body...
	//console.log(bytes);
	client.close();
});