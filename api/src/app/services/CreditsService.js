const { Credit, User, Sequelize } = require('../../database/models');

class CreditsService {
  async index(startDate, endDate) {
    const where = {
      date: {
        [Sequelize.Op.between]: [startDate, endDate],
      },
    };

    const credit = await Credit.findAll({ where });

    return credit;
  }

  async store(newCredit) {
    const { user_id: userId } = newCredit;
    const storeCredit = { ...newCredit, user_id: userId };

    const user = await User.findByPk(userId);

    if (!user) {
      return { error: { status: 404, message: 'User does not exist!' } };
    }

    const credit = await Credit.create(storeCredit);

    return credit;
  }

  async show(id) {
    const credit = await Credit.findByPk(id);

    if (!credit) {
      return { error: { status: 404, message: 'Credit does not exist!' } };
    }

    return credit;
  }

  async destroy(id) {
    const credit = await Credit.findByPk(id);

    if (!credit) {
      return { error: { status: 404, message: 'Credit does not exist!' } };
    }

    await credit.destroy();

    return credit;
  }
}

module.exports = new CreditsService();
