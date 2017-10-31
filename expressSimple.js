
var http = require('http');
var express = require('express');
var app = express();

app.get('/', (req,res,next)=>{
	res.send("hellloooo and happt halloween");
})

var server = http.createServer(app);
server.listen(8080);
console.log("the server is listening to port 8080")