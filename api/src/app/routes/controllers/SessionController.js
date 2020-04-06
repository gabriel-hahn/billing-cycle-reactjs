const SessionService = require('../../services/SessionService');

class SessionController {
  async create(req, res) {
    const user = await SessionService.create(req.body);

    if (user.error) {
      const { status, message } = user.error;

      return res.status(status).json({ message });
    }

    return res.json(user);
  }

  async store(req, res) {
    const user = await SessionService.store(req.body);

    if (user.error) {
      const { status, message } = user.error;

      return res.status(status).json({ message });
    }

    return res.json(user);
  }

  async resetPassword(req, res) {
    const user = await SessionService.resetPasswordRequest(req.body);

    if (user.error) {
      const { status, message } = user.error;

      return res.status(status).json({ message });
    }

    return res.json(user);
  }

  async resetSuccess(req, res) {

  }
}

module.exports = new SessionController();
