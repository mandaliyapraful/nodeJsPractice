var fs = require('fs');
//first remove the file from the dir and then the del the dir
fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff',function(err){
        if(err) throw err;
        console.log('Dir removed');
    });
});