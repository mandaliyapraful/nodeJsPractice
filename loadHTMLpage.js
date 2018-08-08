var http = require('http');
var fs = require('fs');

// myRreadStream.on('data',function(chunk){
//     console.log('new chunk received');
//     //console.log(chunk);
//     myWriteStream.write(chunk);
    
// });

var server = http.createServer(function(req,res){
    console.log('Request made to :'+req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    var myRreadStream = fs.createReadStream(__dirname+'/practice.html','utf8');
   // var myWriteStream = fs.createWriteStream(__dirname+'/writeStream.txt');
    myRreadStream.pipe(res);
   // res.end('Welcome Prafull...');
});

server.listen(3000,'127.0.0.1');
console.log('server Listening at port :3000');