var express = require('express');
var router = express.Router();
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');


router.post('/:carId/new', isLoggedIn, function(req,res){
    var car = req.params.carId;
    if(req.body.option === undefined){
        req.body.option = null;
    }
    db.car_service.create({
        carId:car,
        serviceId:req.body.serviceId,
        cost:req.body.cost,
        mileage:req.body.mileage,
        notes:req.body.notes,
        option:req.body.option
    }).then(function(test){
        // if(req.body.other){
        //     db.other.findOrCreate({
        //         where:{
        //             name:req.body.other
        //         }
        //     });
        // }
        res.redirect('/profile');
    });

});

module.exports = router;
