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

//add car
router.post('/car/new', isLoggedIn, function(req,res){
    db.car.create(
        {
            year:req.body.year,
            make:req.body.make,
            model:req.body.model,
            style:req.body.style,
            userId:req.user.id,
            styleDetails:req.body.styleDetails

        }
    ).then(function(){
        req.flash('success', 'Car added');
        res.redirect('/profile');
    });
});

//delete car
router.delete('/:id', isLoggedIn, function(req,res){
    db.car.destroy(
        {where:{
            id: req.params.id
            }
        }
    ).then(function(results){
        //deletes the logs that were associated with the car
        db.car_service.destroy({
            where:{carId:req.params.id}
        }).then(function(results){
            req.flash('success', 'Car Deleted');
            res.send('deleted');

        });

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
