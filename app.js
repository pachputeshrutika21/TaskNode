const express=require('express');
const app=express();
app.set('port',process.env.PORT || 7700);
app.get('/',function(req,res){
  res.send(`Welcome!!!!`);
});
const server=app.listen(app.get('port'),function(){
  console.log(`Express running in port ${server.address().port}`);
});