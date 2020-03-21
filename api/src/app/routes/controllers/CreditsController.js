const CreditsService = require('../../services/CreditsService');

class CreditsController {
  async index(req, res) {
    const { startDate, endDate } = req.body;

    const credits = await CreditsService.index(startDate, endDate);

    return res.json(credits);
  }

  async store(req, res) {
    const credit = await CreditsService.store(req.body);

    if (credit.error) {
      const { status, message } = credit.error;

      return res.status(status).json({ message });
    }

    return res.json(credit);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const credit = await CreditsService.destroy(id);

    if (credit.error) {
      const { status, message } = credit.error;

      return res.status(status).json({ message });
    }

    return res.json(credit);
  }

  async show(req, res) {
    const { id } = req.params;

    const credit = await CreditsService.show(id);

    if (credit.error) {
      const { status, message } = credit.error;

      return res.status(status).json({ message });
    }

    return res.json(credit);
  }

  async update(req, res) {
    const credit = await CreditsService.update(req.body);

    if (credit.error) {
      const { status, message } = credit.error;

      return res.status(status).json({ message });
    }

    return res.json(credit);
  }
}

module.exports = new CreditsController();
