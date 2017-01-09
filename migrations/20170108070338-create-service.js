'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      fuelId: {
        type: Sequelize.INTEGER
      },
      oilId: {
        type: Sequelize.INTEGER
      },
      wiperId: {
        type: Sequelize.INTEGER
      },
      tiresizeId: {
        type: Sequelize.INTEGER
      },
      tirebrandId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('services');
  }
};
