var fs = require('fs');
//delete the file
fs.unlink('writeMe.txt',function(err){
    if(err) throw err;
    console.log('File deleted');
});