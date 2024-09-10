var express=require('express');
var app=express()
app.get('/contact',function(reg,res){
    res.send('Hello World')
})
app.listen(3000,function(){
    console.log("example app listening on port 3000")
})