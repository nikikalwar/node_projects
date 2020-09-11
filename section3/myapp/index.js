/*
Primary file for the api




*/

//Dependencies

var http=require('http');
var url=require('url');
//the server should respond to all the requests with a string
var server=http.createServer(function(req,res){

    //get the URL and parse it
    var parsedUrl=url.parse(req.url,true);

    //get the path
        var path=parsedUrl.pathname;
        var trimmedPath=path.replace(/^\/+|\/+$/g,'');
    //send the response
    res.end("hello World\n");

    //log the request path
        console.log('Request received on path: '+trimmedPath);
});
//start the server,and have it listen to port 3000
server.listen(3000,function(){
    console.log("the server is listening to port 3000 now");
});