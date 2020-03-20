const { Credits } = require('../../database/models');

class CreditsService {
  async index(startDate, endDate) {
    const where = {
      date: {
        $between: [startDate, endDate],
      },
    };

    const credits = await Credits.findAll({ where });

    return credits;
  }

  async store(credit) {
    // Store credit
  }

  async show(id) {
    const credit = await Credits.findByPk(id);

    if (!credit) {
      return { error: { status: 404, message: 'Credit does not exist!' } };
    }

    return credit;
  }

  async destroy(id) {
    const credit = await Credits.findByPk(id);

    if (!credit) {
      return { error: { status: 404, message: 'Credit does not exist!' } };
    }

    await credit.destroy();

    return credit;
  }
}

module.exports = new CreditsService();
