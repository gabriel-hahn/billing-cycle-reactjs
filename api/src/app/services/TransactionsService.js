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
}

module.exports = new TransactionsService();
