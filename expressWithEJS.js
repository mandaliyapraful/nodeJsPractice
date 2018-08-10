var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,resp){
    resp.sendFile(__dirname+'/practice.html');
});

app.get('/contact-us',function(req,resp){
    resp.send('This is the contact page');
});

app.get('/profile/:id',function(req,resp){
    //resp.send('You have accessed the profile with id : '+req.params.id);
    var data ={age : 25, job : 'teacher',hobbies:['playing','reading','dancing']};
    resp.render('profile',{person:req.params.id,data : data});
});
app.listen(3000);
console.log('listening at port 3000...');