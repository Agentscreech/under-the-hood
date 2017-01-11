var express = require('express');
var router = express.Router();
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');

//display profile
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



//router for AJAX that gets data to populate the forms
router.get('/form-data/:service', isLoggedIn, function(req, res){
    var toGet = req.params.service;
    if(toGet == 'services'){
        db.service.findAll().then(function(results){
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

    }

});

module.exports = router;

// snippet for tires
// else if (toGet == 'tire'){
//     db.tireSize.findAll({attributes: 'width'}).then(function(result){
//         res.send(result);
//     });

//snippet to see if you can use a variable in the table name
// router.get('/form-data/:service', isLoggedIn, function(req, res){
//     var toGet = req.params.service;
//     db[toGet].findAll().then(function(result){
//         res.send(results);
//     });
// });
