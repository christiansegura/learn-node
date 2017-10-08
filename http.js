//there are nodes core modules you can use
//http, url, path, querystring, fs, util
//add core modules
var http = require('http');
var fs = require('fs');

function response_404(response){
	response.writeHead(404, {'Content-Type': "text/plain"});
	response.write("Sorry the page you're looking for isn't around");
	response.end();
}

function onRequest(request, response){
	console.log("We got a request from the client.");

	if (request.method == "GET" && request.url == "/"){
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('./index.html').pipe(response);
	}else{
		response_404(response);
	}
}

http.createServer(onRequest).listen(8083);

console.log('this server is on');

//add framework