'use strict';
module.exports = function(sequelize, DataTypes) {
  var other = sequelize.define('other', {
    userInput: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.other.belongsTo(models.car_service);
      }
    }
  });
  return other;
};
