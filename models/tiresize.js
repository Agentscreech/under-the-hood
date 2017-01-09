'use strict';
module.exports = function(sequelize, DataTypes) {
  var tireSize = sequelize.define('tireSize', {
    width: DataTypes.STRING,
    height: DataTypes.STRING,
    rim: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // models.tireSize.belongsTo(models.car_service);
    }
    }
  });
  return tireSize;
};
