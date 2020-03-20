const { Debit, User, Sequelize } = require('../../database/models');

class DebitsService {
  async index(startDate, endDate) {
    const where = {
      date: {
        [Sequelize.Op.between]: [startDate, endDate],
      },
    };

    const debit = await Debit.findAll({ where });

    return debit;
  }

  async store(newDebit) {
    const { user_id: userId } = newDebit;
    const storeDebit = { ...newDebit, user_id: userId };

    const user = await User.findByPk(userId);

    if (!user) {
      return { error: { status: 404, message: 'User does not exist!' } };
    }

    const debit = await Debit.create(storeDebit);

    return debit;
  }

  async show(id) {
    const debit = await Debit.findByPk(id);

    if (!debit) {
      return { error: { status: 404, message: 'Debit does not exist!' } };
    }

    return debit;
  }

  async destroy(id) {
    const debit = await Debit.findByPk(id);

    if (!debit) {
      return { error: { status: 404, message: 'Debit does not exist!' } };
    }

    await debit.destroy();

    return debit;
  }

  async update(newDebit) {
    const debit = await Debit.findByPk(newDebit.id);

    if (!debit) {
      return { error: { status: 404, message: 'Debit does not exist!' } };
    }

    const debitUpdated = await debit.update(newDebit);

    return debitUpdated;
  }
}

module.exports = new DebitsService();
