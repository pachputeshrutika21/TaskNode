// const qliktagInterns = require('./qliktagInterns')
const mongoose=require('mongoose');

 const index = require('./index');
require('dotenv').config({path:'variables.env'});
mongoose.connect(process.env.DATABASE);
mongoose.Promise=global.Promise;
mongoose.connection.on('error',(err)=>{
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

require('./qliktagInterns');
const app = require('./app');
    app.set('port', process.env.PORT);
     const server = app.listen(app.get('port'), () => { 
     console.log(`Express running → PORT ${server.address().port}`);
  });