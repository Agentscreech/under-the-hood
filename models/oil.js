'use strict';
module.exports = function(sequelize, DataTypes) {
  var oil = sequelize.define('oil', {
    weight: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return oil;
};