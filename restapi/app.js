/*
Primary files
*/

//Dependencies
var http=require('http');
var url=require('url');

//the server responds to all request with a string
var server=http.createServer(function(req,res){
    

    //get the url and parse it
    var parsedUrl=url.parse(req.url,true);

    
    //get the path 
    var path=parsedUrl.pathname;
    var trimmedPath=path.replace(/^\/+|\/+$/g,'');

        //get the query String as object
        var queryStringObject=parsedUrl.query;
        

        //get the HTTP method
        var method=req.method.toLowerCase();

        //print
        

    //log the path
    console.log('Request received on the path:'+trimmedPath+' the method is '+method+'query string object',queryStringObject);
    //send the response
    res.end('Hello to the port 3000');




});



//start the server, and have it listen on port 3000

server.listen(3000,function(){
    console.log("the server is listening to port 3000 now");
});

