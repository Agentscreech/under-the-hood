'use strict';
module.exports = function(sequelize, DataTypes) {
  var tireRetailer = sequelize.define('tireRetailer', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tireRetailer;
};