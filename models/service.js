'use strict';
module.exports = function(sequelize, DataTypes) {
  var service = sequelize.define('service', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.service.belongsToMany(models.car, {through: "car_service"});

      }
    }
  });
  return service;
};
