var express = require('express');
var router = express.Router();
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');


//display all logs for current car

router.delete('/:carId/:serviceId', function(req,res){
    console.log('trying to delete');
    db.car_service.destroy({
        where:{
            carId: req.params.carId,
            serviceId: req.params.serviceId
        }
    }).then(function(){
        req.send();
    });
});


router.get('/:id/:carId', isLoggedIn, function(req,res){
    db.car.find({
        where:{
            id:req.params.carId
        }
    }).then(function(car){
        if(req.user.id == car.userId){
            db.car_service.findAll({
                where:{
                    carId: req.params.carId,
                },
                attributes: [
                    'id',
                    'carId',
                    'serviceId',
                    'cost',
                    'mileage',
                    'option',
                    'notes'
                ],
                include: [db.car, db.service]
            }).then(function(services){
                console.log(services);
                res.send(services);
                if(!services){
                    req.flash('error', 'No services records available');
                    res.redirect('/profile');
                } else {
                    db.user.find({
                        where:{id: services[0].car.userId}
                    }).then(function(user){
                        // console.log(user);
                        // console.log(services[0].service.name);
                        res.render('log', {user:user,services:services});
                        // res.send(services);
                    }).catch(function(err){
                        req.flash('error', error.message);
                        res.redirect('/profile');
                    });
                }
            });
        } else {
            req.flash('error', 'Car not found');
            res.redirect('/profile');
        }
    });




});

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
