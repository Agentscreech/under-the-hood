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
                if (services.length > 0) {
                    db.user.find({
                        where: {
                            id: services[0].car.userId
                        }
                    }).then(function(user) {
                        res.render('log/showlog', {
                            user: user,
                            services: services
                        });
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

router.put('/edit/:carId', function(req, res) { //first line is to handle if there is only one log
    if(req.body['id'].length == 1){ //jshint ignore:line
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
        }
    }

    req.flash('success', 'Update successful');
    var url = "/log/"+req.user.id+"/"+req.params.carId;
    res.send(url);

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
        req.flash('success', 'Logged successfully');
        res.redirect('/profile');
    });

});


//delete log
router.delete('/:id', function(req, res) {
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
