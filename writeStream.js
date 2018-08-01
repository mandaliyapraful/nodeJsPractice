var http = require('http');
var fs = require('fs');

var myRreadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');

myRreadStream.on('data',function(chunk){
    console.log('new chunk received');
    console.log(chunk);
});
