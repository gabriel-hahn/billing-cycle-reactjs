const { Debit, Credit, User, Sequelize } = require('../../database/models');

const order = [['date', 'DESC']];

class DebitsService {
  async index(startDate, endDate, userId) {
    console.log('startDate: ', startDate);
    console.log('endDate: ', endDate);
    console.log('userId: ', userId);

    const newEndDate = new Date(endDate);
    console.log('newEndDate: ', newEndDate);
    newEndDate.setDate(newEndDate.getDate() + 1);
    console.log('newEndDate after add: ', newEndDate);

    const where = {
      user_id: userId,
      date: {
        [Sequelize.Op.and]: {
          [Sequelize.Op.gte]: startDate,
          [Sequelize.Op.lte]: newEndDate
        }
      }
    };

    console.log('Going to access database!');

    const debit = await Debit.findAll({ where, order });

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
      const newDebitObject = { ...newDebit, id: null };
      const debitCreated = await Debit.create(newDebitObject);

      await Credit.destroy({ where: { id: newDebit.id } });

      return debitCreated;
    }

    const debitUpdated = await debit.update(newDebit);

    return debitUpdated;
  }

  async getAllByCurrentMonth(userId) {
    const currentDay = new Date();
    const firstDayCurrentMonth = new Date(
      currentDay.getFullYear(),
      currentDay.getMonth(),
      1
    );

    const where = {
      user_id: userId,
      date: {
        [Sequelize.Op.and]: {
          [Sequelize.Op.gte]: firstDayCurrentMonth,
          [Sequelize.Op.lte]: currentDay
        }
      }
    };

    const debits = await Debit.findAll({ where, order });

    return debits;
  }
}

module.exports = new DebitsService();
