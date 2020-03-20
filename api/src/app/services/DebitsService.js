const { Debits } = require('../../database/models');

class DebitsService {
  async index(startDate, endDate) {
    const where = {
      date: {
        $between: [startDate, endDate],
      },
    };

    const debits = await Debits.findAll({ where });

    return debits;
  }

  async store(debit) {
    // Store debit
  }

  async show(id) {
    const debit = await Debits.findByPk(id);

    if (!debit) {
      return { error: { status: 404, message: 'Debit does not exist!' } };
    }

    return debit;
  }

  async destroy(id) {
    const debit = await Debits.findByPk(id);

    if (!debit) {
      return { error: { status: 404, message: 'Debit does not exist!' } };
    }

    await debit.destroy();

    return debit;
  }
}

module.exports = new DebitsService();
