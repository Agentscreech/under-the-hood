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
    tireBrandId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.car_service.belongsTo(models.fuel);
        models.car_service.belongsTo(models.oil);
        models.car_service.belongsTo(models.wiper);
        models.car_service.belongsTo(models.tireSize);
        models.car_service.belongsTo(models.tireBrand);
        models.car_service.belongsTo(models.other);
      }
    }
  });
  return car_service;
};
