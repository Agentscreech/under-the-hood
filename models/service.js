'use strict';
module.exports = function(sequelize, DataTypes) {
  var service = sequelize.define('service', {
    name: DataTypes.STRING,
    fuelId: DataTypes.INTEGER,
    oilId: DataTypes.INTEGER,
    wiperId: DataTypes.INTEGER,
    tiresizeId: DataTypes.INTEGER,
    tirebrandId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return service;
};
