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

// router.get('/form-data/:service', isLoggedIn, function(req, res){
//     var toGet = req.params.service;
//     db[toGet].findAll().then(function(result){
//         res.send(results);
//     });
// });
router.get('/form-data/:service', isLoggedIn, function(req, res){
    var toGet = req.params.service;
    if(toGet == 'services'){
        db.service.findAll().then(function(results){
            console.log(results);
            res.send(results);
        });
    } else if (toGet == 'fuel'){
        db.fuel.findAll().then(function(result){
            res.send(result);
        });
    } else if (toGet == 'oil'){
        db.oil.findAll().then(function(result){
            res.send(result);
        });
    } else if (toGet == 'wiper'){
        db.wiper.findAll().then(function(result){
            res.send(result);
        });
    }  else if (toGet == 'tire'){
        db.tireSize.findAll({attributes: 'width'}).then(function(result){
            res.send(result);
        });
    }

});

module.exports = router;
