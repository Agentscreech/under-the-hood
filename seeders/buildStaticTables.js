var db = require('../models');


function buildAll(){
    buildServices(services);
    buildFuel(fuel);
    buildOil(oil);
    buildWiper(wipers);
}

//populate services
var services = [
    {
        name:"fuel",
    },
    {
        name:"oil",
    },
    {
        name:"wiper",
    },
    {
        name:"air filter"
    },
    {
        name:"battery"
    },
    {
        name:"in cabin air filter"
    },
    {
        name:"spark plugs"
    },
    {
        name:"brakes"
    }
];

function buildServices(item){
    item.forEach(function(service){
        db.service.findOrCreate({
            where:{
                name:service.name
            }
        });
    });

}

//populate fuel
var fuel = ["regular", "plus", "premium", "diesel"];
function buildFuel(item){
    item.forEach(function(fuel){
        db.fuel.findOrCreate({where:{grade:fuel}});
    });
}



//populate oil
var oil = ["0W-30", "0W-40", "5W-40", "5W-30", "10W-30", "10W-40", "15W-40", "20W-50"];
function buildOil(item){
    item.forEach(function(oil){
        db.oil.findOrCreate({where:{weight:oil}});
    });
}


//populate wipers
var wipers = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
function buildWiper(item){
    item.forEach(function(wiper){
        db.wiper.findOrCreate({where:{length:wiper}});
    });
}


buildAll();
