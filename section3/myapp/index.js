/*
Primary file for the api




*/

//Dependencies
var http=require('http');
var url=require('url');
var StringDecoder=require('string_decoder').StringDecoder;
//the server should respond to all the requests with a string
var server=http.createServer(function(req,res){

    //get the URL and parse it
    var parsedUrl=url.parse(req.url,true);

    //get the path
        var path=parsedUrl.pathname;
        var trimmedPath=path.replace(/^\/+|\/+$/g,'');

        //Get the queryString
        var queryStringObject=parsedUrl.query;
        //Get the HTTP methods//req object
        var method=req.method.toLowerCase();
        //get the headers which we are receiving
        var headers=req.headers;
        
        //get the payload, if any
        var decoder=new StringDecoder('utf-8');
        var buffer='';
        req.on('data',function(data){
            buffer+=decoder.write(data);
        });
            req.on('data',function(data){
                buffer+=decoder.end();
            });
                
            //printing the payload which we received
            console.log('Request received with payload ',buffer);
            //send the response
           // res.end("hello World\n");

            //log the request path
            // console.log('Request received on path: '+trimmedPath+ ' with this method--> '+ method+' the query parameter is --> ',queryStringObject);

                //log the headers
          //      console.log("the header is ",headers);

    });
            //start the server,and have it listen to port 3000
            server.listen(3000,function(){
                console.log("the server is listening to port 3000 now");
            });
