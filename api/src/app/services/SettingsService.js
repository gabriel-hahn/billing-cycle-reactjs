const { Setting } = require('../../database/models');

const where = {
  user_id: null,
};

class DebitsService {
  async show(id) {
    where.user_id = id;

    const setting = await Setting.findOne({ where });

    return !setting ? [] : setting;
  }

  async update(newSetting, userId) {
    const newSettings = { ...newSetting, user_id: userId, date_format: newSetting.dateFormat };

    if (!newSettings.id) {
      const savedSettings = await Setting.create(newSettings);

      return savedSettings;
    }

    const setting = await Setting.findByPk(newSettings.id);

    if (!setting) {
      return { error: { status: 404, message: 'Settings does not exist!' } };
    }

    const settingsUpdated = await setting.update(newSettings);

    return settingsUpdated;
  }
}

module.exports = new DebitsService();
