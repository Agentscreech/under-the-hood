'use strict';
module.exports = function(sequelize, DataTypes) {
  var car_service = sequelize.define('car_service', {
    carId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    mileage: DataTypes.INTEGER,
    option: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.car_service.belongsTo(models.other);
      }
    }
  });
  return car_service;
};
