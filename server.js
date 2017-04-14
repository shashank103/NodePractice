var http = require("http");
var fs = require("fs");

//404 response
function send404response(response){
	response.writeHead(404,{"Contex-Type": "text/plain"});
	response.write("Error 404: Page not found");
	response.end(); 
}

function onRequest (request, response){

	if(request.method == 'GET' && request.url == '/'){
		response.writeHead(200,{"Contex-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	}else if(request.method == 'GET' && request.url == '/file'){
		response.writeHead(200,{"Contex-Type": "text/mp4"});
		fs.createReadStream("./a.mp4").pipe(response);
	}else if(request.method == 'GET' && request.url == '/mp3'){
		response.writeHead(200,{"Contex-Type": "text/mp3"});
		fs.createReadStream("./song.mp3").pipe(response);
	}
	else{
		send404response(response);
	}
}

http.createServer(onRequest).listen(3000);
console.log("server is running");