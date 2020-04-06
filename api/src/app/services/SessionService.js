const EmailService = require('./EmailService');
const { User } = require('../../database/models');

class SessionService {
  async create({ email, password, name }) {
    if (!email || !password || !name) {
      return { error: { status: 400, message: 'You should fill all fields' } };
    }

    const user = await User.findOne({ where: { email } });

    if (user) {
      return { error: { status: 409, message: 'User already exists' } };
    }

    const newUser = await User.create({ email, password, name });

    return { user: newUser, token: newUser.generateToken() };
  }

  async store({ email, password }) {
    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return { error: { status: 401, message: 'Invalid credentials' } };
    }

    return { user, token: user.generateToken() };
  }

  async resetPasswordRequest({ email }) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return { error: { status: 404, message: 'User not found' } };
    }

    const randomPassword = Math.random().toString(36).substring(2);
    user.password = randomPassword;

    await user.save();

    await EmailService.sendResetPassword(email, randomPassword);

    return { status: 200, message: 'Please, check your email and set a new password for your account' };
  }
}

module.exports = new SessionService();
