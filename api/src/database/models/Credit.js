module.exports = (sequelize, DataTypes) => {
  const Credit = sequelize.define('Credit', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    repeat: DataTypes.BOOLEAN,
    date_repeat: DataTypes.DATE,
  }, {});

  Credit.associate = (models) => {
    Credit.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Credit;
};
