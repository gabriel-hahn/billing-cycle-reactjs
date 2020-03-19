module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    date: DataTypes.DATE,
  }, {});

  Transactions.associate = (models) => {
    Transactions.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Transactions;
};
