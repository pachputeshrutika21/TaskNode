const express = require('express');
const router = express.Router();
require('./qliktagInterns');
const userController=require('./userController');
// router.post('index',userController.createUser);
 module.exports = router;