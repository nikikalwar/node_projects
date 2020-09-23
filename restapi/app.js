/*
Primary files
*/

//Dependencies
var http=require('http');
var url=require('url');
var StringDecoder  = require('string_decoder').StringDecoder;

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

        //get the headers as an object
        var headers=req.headers;

        //get the payload,if any
        var decoder=new StringDecoder('utf-8');
        var buffer= '';
        req.on('data',function(data){
            buffer+=decoder.write(data);
        });

        req.on('end',function(){
            buffer+=decoder.end();
        
        //log the request path
        console.log("The payload received is :",buffer);

        //send the response
        res.end('Hello to the port 3000');

        });

});



//start the server, and have it listen on port 3000

server.listen(3000,function(){
    console.log("the server is listening to port 3000 now");
});

