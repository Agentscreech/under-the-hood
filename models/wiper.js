'use strict';
module.exports = function(sequelize, DataTypes) {
  var wiper = sequelize.define('wiper', {
    length: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.wiper.belongsTo(models.car_service);
      }
    }
  });
  return wiper;
};
