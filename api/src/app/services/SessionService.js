const { User } = require('../../database/models');

class SessionService {
  async store(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return { error: { status: 401, message: 'User not found' } };
    }

    if (!(await user.checkPassword(password))) {
      return { error: { status: 401, message: 'Incorrect password' } };
    }

    return { user, token: user.generateToken() };
  }
}

module.exports = new SessionService();
