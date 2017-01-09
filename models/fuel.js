'use strict';
module.exports = function(sequelize, DataTypes) {
  var fuel = sequelize.define('fuel', {
    grade: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // models.fuel.belongsTo(models.car_service);
      }
    }
  });
  return fuel;
};
