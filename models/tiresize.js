'use strict';
module.exports = function(sequelize, DataTypes) {
  var tireSize = sequelize.define('tireSize', {
    width: DataTypes.STRING,
    height: DataTypes.STRING,
    rim: DataTypes.STRING,
    truck: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tireSize;
};