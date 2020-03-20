const DebitsService = require('../../services/DebitsService');

class DebitsController {
  async index(req, res) {
    const { startDate, endDate } = req.body;

    const debits = await DebitsService.index(startDate, endDate);

    return res.json(debits);
  }

  async store(req, res) {
    const debit = await DebitsService.store(req.body);

    if (debit.error) {
      const { status, message } = debit.error;

      return res.status(status).json({ message });
    }

    return res.json(debit);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const debit = await DebitsService.destroy(id);

    if (debit.error) {
      const { status, message } = debit.error;

      return res.status(status).json({ message });
    }

    return res.json(debit);
  }

  async show(req, res) {
    const { id } = req.params;

    const debit = await DebitsService.show(id);

    if (debit.error) {
      const { status, message } = debit.error;

      return res.status(status).json({ message });
    }

    return res.json(debit);
  }

  async update(req, res) {
    // Update a debit
  }
}

module.exports = new DebitsController();
