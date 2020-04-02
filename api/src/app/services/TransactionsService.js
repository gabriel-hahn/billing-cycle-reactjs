const { Debit, Credit, Sequelize } = require('../../database/models');

const today = new Date();
const threeMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());

class TransactionsService {
  async cashFlow(userId) {
    const where = {
      user_id: userId,
      date: {
        [Sequelize.Op.and]: {
          [Sequelize.Op.gte]: threeMonthsAgo,
          [Sequelize.Op.lte]: today,
        },
      },
    };

    const debits = await Debit.findAll({ where });
    const credits = await Credit.findAll({ where });

    const cashFlow = {};

    debits.forEach((transaction) => {
      const transactionMonth = transaction.date.getMonth();
      const value = cashFlow[transactionMonth] || 0;

      cashFlow[transactionMonth] = (transaction.value + value);
    });

    credits.forEach((transaction) => {
      const transactionMonth = transaction.date.getMonth();
      const value = cashFlow[transactionMonth] || 0;

      cashFlow[transactionMonth] = (transaction.value - value);
    });

    return cashFlow;
  }

  async completeCashFlow(userId) {
    const where = {
      user_id: userId,
    };

    const totalDebit = await Debit.findOne({
      attributes: [
        [Sequelize.fn('SUM', Sequelize.col('value')), 'total'],
      ],
      where,
    });

    const totalCredit = await Credit.findOne({
      attributes: [
        [Sequelize.fn('SUM', Sequelize.col('value')), 'total'],
      ],
      where,
    });

    return { debit: totalDebit.dataValues.total, credit: totalCredit.dataValues.total };
  }
}

module.exports = new TransactionsService();
