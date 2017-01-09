'use strict';
module.exports = function(sequelize, DataTypes) {
  var oil = sequelize.define('oil', {
    weight: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.oil.belongsTo(models.car_service);
      }
    }
  });
  return oil;
};
