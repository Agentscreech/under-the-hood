'use strict';
module.exports = function(sequelize, DataTypes) {
  var car_service = sequelize.define('car_service', {
    carId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    mileage: DataTypes.INTEGER,
    fuelId: DataTypes.INTEGER,
    oilId: DataTypes.INTEGER,
    wiperId: DataTypes.INTEGER,
    tireSizeId: DataTypes.INTEGER,
    tireBrandId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return car_service;
};