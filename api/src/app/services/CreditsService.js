const { Credit, User, Sequelize } = require('../../database/models');

class CreditsService {
  async index(startDate, endDate) {
    const newEndDate = new Date(endDate);
    newEndDate.setDate(newEndDate.getDate() + 1);

    const where = {
      date: {
        [Sequelize.Op.and]: {
          [Sequelize.Op.gte]: startDate,
          [Sequelize.Op.lte]: newEndDate,
        },
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

  async update(newCredit) {
    const credit = await Credit.findByPk(newCredit.id);

    if (!credit) {
      return { error: { status: 404, message: 'Credit does not exist!' } };
    }

    const creditUpdated = await credit.update(newCredit);

    return creditUpdated;
  }

  async allByCurrentMonth() {
    const currentDay = new Date();
    const firstDayCurrentMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);

    const where = {
      date: {
        [Sequelize.Op.and]: {
          [Sequelize.Op.gte]: firstDayCurrentMonth,
          [Sequelize.Op.lte]: currentDay,
        },
      },
    };

    const order = [
      ['date', 'DESC'],
    ];

    const credit = await Credit.findAll({ where, order });

    return credit;
  }
}

module.exports = new CreditsService();
