'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('car_services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carId: {
        type: Sequelize.INTEGER
      },
      serviceId: {
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.INTEGER
      },
      mileage: {
        type: Sequelize.INTEGER
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
      tireSizeId: {
        type: Sequelize.INTEGER
      },
      tireBrandId: {
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
    return queryInterface.dropTable('car_services');
  }
};
