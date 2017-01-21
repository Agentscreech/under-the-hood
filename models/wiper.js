'use strict';
module.exports = function(sequelize, DataTypes) {
  var wiper = sequelize.define('wiper', {
    length: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return wiper;
};
