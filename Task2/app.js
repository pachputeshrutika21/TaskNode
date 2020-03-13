const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
var path=require('path');
const {catchErrors}=require('./errorHandlers');
require('./qliktagInterns');
const userController=require('./userController');
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too
 app.get('/', function (req, res) {
    res.render('users');
   })
//   app.get('/users', function (req, res) {
//     res.send('hello world!!!!')
//   })
//   app.get('/admin', function (req, res) {
//     res.send('hello world!!!!')
//   })
// app.post(catchErrors('/',userController.createUser));
 
module.exports = app;
