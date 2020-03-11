const { SessionService } = require('../../services/SessionService');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await SessionService.store(email, password);

    if (user.error) {
      const { status, message } = user.error;

      return res.status(status).json({ message });
    }

    return res.json(user);
  }
}

module.exports = new SessionController();
