const express=require('express');
const router=express.Router();
const app=express();
const data=[];
app.set('port',process.env.PORT);
console.log(`portname is ${process.env.PORT}`);
console.log(`Hostname is ${process.env.HOST}`);
data.push(process.env.PORT);
data.push(process.env.HOST);
app.get('/',function(req,res){
    res.send(`${data}   Hello World`);
});
const server=app.listen(app.get('port'),function(){
  console.log(`Express running in port ${server.address().port}`);
 
});