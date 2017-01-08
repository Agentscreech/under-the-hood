'use strict';
module.exports = function(sequelize, DataTypes) {
  var car = sequelize.define('car', {
    year: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    style: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    styleDetails: DataTypes.TEXT,
    serviceDetails: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return car;
};