'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.addColumn("Lists", "UserId",
      Sequelize.INTEGER)
      .then(() => {
        queryInterface.addConstraint("Lists", {
          fields: ['UserId'],
          type: 'foreign key',
          name: 'fkey_userId',
          references: { //Required field
            table: 'Users',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        });
      })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.removeColumn("Lists", "UserId",)
  }
};
