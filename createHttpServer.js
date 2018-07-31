var http = require('http');

var server = http.createServer(function(req,res){
    console.log('Request made to :'+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Welcome Prafull...');
});

server.listen(3000,'127.0.0.1');
console.log('Listening at port :3000');