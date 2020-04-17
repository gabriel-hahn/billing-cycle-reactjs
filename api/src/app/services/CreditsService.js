const {
  Credit,
  Debit,
  User,
  Sequelize,
} = require('../../database/models');

const order = [
  ['date', 'DESC'],
];

class CreditsService {
  async index(startDate, endDate, userId) {
    const newEndDate = new Date(endDate);
    newEndDate.setDate(newEndDate.getDate() + 1);

    const where = {
      user_id: userId,
      date: {
        [Sequelize.Op.and]: {
          [Sequelize.Op.gte]: startDate,
          [Sequelize.Op.lte]: newEndDate,
        },
      },
    };

    const credit = await Credit.findAll({ where, order });

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
      const newCreditObject = { ...newCredit, id: null };
      const creditCreated = await Credit.create(newCreditObject);

      await Debit.destroy({ where: { id: newCredit.id } });

      return creditCreated;
    }

    const creditUpdated = await credit.update(newCredit);

    return creditUpdated;
  }

  async getAllByCurrentMonth(userId) {
    const currentDay = new Date();
    const firstDayCurrentMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);

    const where = {
      user_id: userId,
      date: {
        [Sequelize.Op.and]: {
          [Sequelize.Op.gte]: firstDayCurrentMonth,
          [Sequelize.Op.lte]: currentDay,
        },
      },
    };

    const credits = await Credit.findAll({ where, order });

    return credits;
  }
}

module.exports = new CreditsService();
