var express=require('express');
var app=express()
app.get('/about',function(reg,res){
    res.send('Sirh')
})
app.listen(3000,function(){
    console.log("example app listening on port 3000")
})