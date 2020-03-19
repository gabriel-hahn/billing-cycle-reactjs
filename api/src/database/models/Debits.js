module.exports = (sequelize, DataTypes) => {
  const Debits = sequelize.define('Debits', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    repeat: DataTypes.BOOLEAN,
    date_repeat: DataTypes.DATE,
  }, {});

  Debits.associate = (models) => {
    Debits.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Debits;
};
