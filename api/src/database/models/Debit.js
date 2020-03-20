module.exports = (sequelize, DataTypes) => {
  const Debit = sequelize.define('Debit', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    repeat: DataTypes.BOOLEAN,
    date_repeat: DataTypes.DATE,
  }, {});

  Debit.associate = (models) => {
    Debit.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Debit;
};
