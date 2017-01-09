var express = require('express');
var router = express.Router();
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');


router.get('/log/:carId/new', isLoggedIn, function(req,res){
    
});

models.exports = router;
