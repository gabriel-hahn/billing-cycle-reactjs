module.exports = (sequelize, DataTypes) => {
  const Credits = sequelize.define('Credits', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    repeat: DataTypes.BOOLEAN,
    date_repeat: DataTypes.DATE,
  }, {});

  Credits.associate = (models) => {
    Credits.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Credits;
};
