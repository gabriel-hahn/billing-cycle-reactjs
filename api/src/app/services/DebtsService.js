const { Debt, User, Sequelize } = require('../../database/models');

class DebtsService {
  async index(startDate, endDate) {
    const where = {
      date: {
        [Sequelize.Op.between]: [startDate, endDate],
      },
    };

    const debt = await Debt.findAll({ where });

    return debt;
  }

  async store(newDebt) {
    const { user_id: userId } = newDebt;
    const storeDebt = { ...newDebt, user_id: userId };

    const user = await User.findByPk(userId);

    if (!user) {
      return { error: { status: 404, message: 'User does not exist!' } };
    }

    const debt = await Debt.create(storeDebt);

    return debt;
  }

  async show(id) {
    const debt = await Debt.findByPk(id);

    if (!debt) {
      return { error: { status: 404, message: 'Debt does not exist!' } };
    }

    return debt;
  }

  async destroy(id) {
    const debt = await Debt.findByPk(id);

    if (!debt) {
      return { error: { status: 404, message: 'Debt does not exist!' } };
    }

    await debt.destroy();

    return debt;
  }

  async update(newDebt) {
    const debt = await Debt.findByPk(newDebt.id);

    if (!debt) {
      return { error: { status: 404, message: 'Debt does not exist!' } };
    }

    const debtUpdated = await debt.update(newDebt);

    return debtUpdated;
  }
}

module.exports = new DebtsService();
