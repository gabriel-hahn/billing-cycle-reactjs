const { Setting } = require('../../database/models');

const where = {
  user_id: null,
};

class DebitsService {
  async show(id) {
    where.user_id = id;

    const setting = await Setting.findOne({ where });

    if (!setting) {
      return { error: { status: 404, message: 'Settings not found!' } };
    }

    return setting;
  }

  async update(newSetting) {
    const setting = await Setting.findByPk(newSetting.id);

    if (!setting) {
      return { error: { status: 404, message: 'Settings does not exist!' } };
    }

    const settingsUpdated = await setting.update(newSetting);

    return settingsUpdated;
  }
}

module.exports = new DebitsService();
