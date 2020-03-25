const DebtsService = require('../../services/DebtsService');

class DebtsController {
  async index(req, res) {
    const { startDate, endDate } = req.query;

    const debts = await DebtsService.index(startDate, endDate);

    return res.json(debts);
  }

  async store(req, res) {
    const debt = await DebtsService.store(req.body);

    if (debt.error) {
      const { status, message } = debt.error;

      return res.status(status).json({ message });
    }

    return res.json(debt);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const debt = await DebtsService.destroy(id);

    if (debt.error) {
      const { status, message } = debt.error;

      return res.status(status).json({ message });
    }

    return res.json(debt);
  }

  async show(req, res) {
    const { id } = req.params;

    const debt = await DebtsService.show(id);

    if (debt.error) {
      const { status, message } = debt.error;

      return res.status(status).json({ message });
    }

    return res.json(debt);
  }

  async update(req, res) {
    const debt = await DebtsService.update(req.body);

    if (debt.error) {
      const { status, message } = debt.error;

      return res.status(status).json({ message });
    }

    return res.json(debt);
  }
}

module.exports = new DebtsController();
