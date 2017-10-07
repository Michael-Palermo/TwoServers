// require/import http module
var http = require('http');

//Define two ports to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//Create a generic function to handle requests and responses
function handleRequest(request, response) {
    response.end("Does this work?" + request.url);

}

// Use Node http package to create a server
// Pass it the handleRequest function
var server1 = http.createServer(handleRequest);

// Listen
server1.listen(PORT1, function() {

    console.log('You are the best!', PORT1);
});


var server2 = http.createServer(handleRequest);

// Listen
server2.listen(PORT2, function() {

    console.log('You are the worst!', PORT2);
});
