const SettingsService = require('../../services/SettingsService');

class SettingsController {
  async show(req, res) {
    const { userid } = req.headers;

    const settings = await SettingsService.show(userid);

    if (settings.error) {
      const { status, message } = settings.error;

      return res.status(status).json({ message });
    }

    return res.json(settings);
  }

  async update(req, res) {
    const { userid } = req.headers;
    const settings = await SettingsService.update(req.body, userid);

    if (settings.error) {
      const { status, message } = settings.error;

      return res.status(status).json({ message });
    }

    return res.json(settings);
  }
}

module.exports = new SettingsController();
