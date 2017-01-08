'use strict';
module.exports = function(sequelize, DataTypes) {
  var other = sequelize.define('other', {
    userInput: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return other;
};