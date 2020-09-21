/*
Primary files
*/

//Dependencies
var http=require('http');


//the server responds to all request with a string
var server=http.createServer(function(req,res){
    res.end('Hello World\n');

});

//start the server, and have it listen on port 3000

server.listen(3000,function(){
    console.log("the server is listening to port 3000 now");
});

