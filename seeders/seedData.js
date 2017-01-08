var db = require('./models');

function splitTire (tires){
    var width = [];
    var height = [];
    var rim = [];
    tires.forEach(function(tire){
        width.push(tire.substring(0,2));
        height.push(tire.substring(4,5));
        rim.push(tire.substring(7,8));

    });
    console.log(width,height,rim);
}
