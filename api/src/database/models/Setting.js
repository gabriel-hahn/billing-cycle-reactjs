module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define('Setting', {
    user_id: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    date_format: DataTypes.STRING,
  }, {});

  Setting.associate = (models) => {
    Setting.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Setting;
};
