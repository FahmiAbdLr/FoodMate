'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_transaksis', {
      id_detail_transaksi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_transaksi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'transaksis',
          key: 'id_transaksi'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'barangs',
          key: 'id_barang'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      qyt: {
        type: Sequelize.INTEGER
      },
      total: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detail_transaksis');
  }
};