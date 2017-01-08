'use strict';
module.exports = function(sequelize, DataTypes) {
  var tireBrand = sequelize.define('tireBrand', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tireBrand;
};