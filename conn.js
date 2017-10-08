var http = require('http');
var connect = require('connect');
var app = connect();

function func1(request,response){
	console.log('This is the first function');
	//next();
}

function func2(request,response){
	console.log('This is the second function');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello world this is func2');
	response.end();
	//next();
}

app.use('/images',func1);
app.use('/software',func2);

http.createServer(app).listen(8082);
console.log('The server is running the connect framework');