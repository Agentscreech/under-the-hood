var express = require('express');
var router = express.Router();
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');


router.get('/', isLoggedIn, function(req, res) {
    db.user.find({
      where: {
        id: req.user.id
      },
      include: [db.car]
    }).then(function(user){
      res.render('profile',{user:user});
    });

});




module.exports = router;
