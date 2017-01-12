var express = require('express');
var router = express.Router();
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');


//display all logs for current car


router.get('/:id/:carId', isLoggedIn, function(req, res) {
    db.car.find({
        where: {
            id: req.params.carId
        }
    }).then(function(car) {
        if (req.user.id == car.userId) {
            db.car_service.findAll({
                where: {
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
            }).then(function(services) {
                console.log(services);
                // console.log(services[0].car);
                if (services.length > 0) {
                    db.user.find({
                        where: {
                            id: services[0].car.userId
                        }
                    }).then(function(user) {
                        // console.log(user);
                        // console.log(services[0].service.name);
                        res.render('log/showlog', {
                            user: user,
                            services: services
                        });
                        // res.send(services);
                    }).catch(function(err) {
                        req.flash('error', error.message);
                        res.redirect('/profile');
                    });
                } else {
                    req.flash('error', 'No services records available');
                    res.redirect('/profile');
                }
            });
        } else {
            req.flash('error', 'Car not found');
            res.redirect('/profile');
        }
    });

});

//update log
router.get('/edit/:id/:carId', isLoggedIn, function(req, res) {
    // res.send(req.body);
    db.car.find({
        where: {
            id: req.params.carId
        }
    }).then(function(car) {
        if (req.user.id == car.userId) {
            db.car_service.findAll({
                where: {
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
            }).then(function(services) {
                res.render('log/editlog', {
                    services: services
                });
            });
        }
    });
});

router.put('/edit/:carId', function(req, res) {
    if(req.body['id'].length == 2){ //jshint ignore:line
        db.car_service.update({
            cost: req.body.cost,
            mileage: req.body.mileage,
            option: req.body.option,
            notes: req.body.notes
        }, {
            where: {
                id: req.body.id,
            }
        }).catch(function(error) { //jshint ignore:line
            req.flash('error', error.message);
            res.send('error');
        });
    } else { //updates the DB with all objects in the list
        for (var i = 0; i < req.body["id"].length; i++) { //jshint ignore:line
            var toDB = {};
            for (var option in req.body) {
                toDB[option] = req.body[option][i];
                // console.log("object to insert", toDB);
            }
            db.car_service.update({
                cost: toDB.cost,
                mileage: toDB.mileage,
                option: toDB.option,
                notes: toDB.notes
            }, {
                where: {
                    id: toDB.id,
                }
            }).catch(function(error) { //jshint ignore:line
                req.flash('error', error.message);
                res.send('error');
            });
            // console.log("this is what should have been inserted", toDB);
        }
    }

    req.flash('success', 'Update successful');
    res.send('ok');

});

// add new log
router.post('/:carId/new', isLoggedIn, function(req, res) {
    var car = req.params.carId;
    if (req.body.option === undefined) {
        req.body.option = null;
    }
    db.car_service.create({
        carId: car,
        serviceId: req.body.serviceId,
        cost: req.body.cost,
        mileage: req.body.mileage,
        notes: req.body.notes,
        option: req.body.option
    }).then(function(test) {
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


//delete log
router.delete('/:id', function(req, res) {
    // console.log('trying to delete');
    db.car_service.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        req.flash('success', 'Log Deleted');

        res.send();
    });
});


module.exports = router;
