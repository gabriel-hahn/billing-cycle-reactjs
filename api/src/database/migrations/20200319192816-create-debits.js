module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('debits', {
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
    type: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: [
        'FOOD',
        'LEISURE',
        'SERVICES',
        'EDUCATION',
        'OTHERS',
        'ELECTRONICS',
        'HEALTH',
        'SHOPPING',
        'DEBT',
      ],
      defaultValue: 'OTHERS',
    },
    description: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    value: {
      allowNull: false,
      type: Sequelize.DOUBLE,
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
  down: (queryInterface) => queryInterface.dropTable('debits'),
};
