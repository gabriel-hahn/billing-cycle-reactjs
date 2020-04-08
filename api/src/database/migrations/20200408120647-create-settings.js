module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('settings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    currency: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: [
        'DOLAR',
        'EURO',
        'REAIS',
      ],
      defaultValue: 'DOLAR',
    },
    date_format: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: [
        'EN',
        'PT',
      ],
      defaultValue: 'EN',
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('settings'),
};
