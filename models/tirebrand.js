'use strict';
module.exports = function(sequelize, DataTypes) {
  var tireBrand = sequelize.define('tireBrand', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.tireBrand.belongsTo(models.car_service);
      }
    }
  });
  return tireBrand;
};
