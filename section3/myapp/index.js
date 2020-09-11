/*
Primary file for the api




*/

//Dependencies

var http=require('http');
//the server should respond to all the requests with a string
var server=http.createServer(function(req,res){
    res.end("Hello world\n");
});
//start the server,and have it listen to port 3000
server.listen(3000,function(){
    console.log("the server is listening to port 3000 now");
});