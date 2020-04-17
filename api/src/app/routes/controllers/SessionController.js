const SessionService = require('../../services/SessionService');
const { handleProcessError } = require('../../../utils/error');

class SessionController {
  async create(req, res) {
    const user = await SessionService.create(req.body);

    return user.error ? handleProcessError(res, user) : res.json(user);
  }

  async store(req, res) {
    const user = await SessionService.store(req.body);

    return user.error ? handleProcessError(res, user) : res.json(user);
  }

  async resetPassword(req, res) {
    const user = await SessionService.resetPasswordRequest(req.body);

    return user.error ? handleProcessError(res, user) : res.json(user);
  }

  async resetSuccess(req, res) {
    const user = await SessionService.updateUserPassword(req.body);

    return user.error ? handleProcessError(res, user) : res.json(user);
  }
}

module.exports = new SessionController();
