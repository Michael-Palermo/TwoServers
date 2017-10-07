// require/import http module
var http = require('http');

//Define a port to listen to
var PORT = 8080;

//Create a generic function to handle requests and responses
function handleRequest(request, response) {
    response.end("Does this work?" + request.url);

}

// Use Node http package to create a server
// Pass it the handleRequest function
var server = http.createServer(handleRequest);

// Listen
server.listen(PORT, function() {

    console.log('Server litening on: http://:%s', PORT);
});

