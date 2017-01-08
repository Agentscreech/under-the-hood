'use strict';
module.exports = function(sequelize, DataTypes) {
  var tireSizes = sequelize.define('tireSizes', {
    size: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tireSizes;
};