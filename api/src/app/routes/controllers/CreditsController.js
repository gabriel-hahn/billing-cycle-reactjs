const CreditsService = require('../../services/CreditsService');

class CreditsController {
  async index(req, res) {
    const { startDate, endDate } = req.body;

    const credits = await CreditsService.index(startDate, endDate);

    return res.json(credits);
  }

  async store(req, res) {
    // Store credit
  }

  async destroy(req, res) {
    const { id } = req.params;

    const credit = await CreditsService.destroy(id);

    return res.json(credit);
  }

  async show(req, res) {
    const { id } = req.params;

    const credit = await CreditsService.show(id);

    return res.json(credit);
  }

  async update(req, res) {
    // Update a credit
  }
}

module.exports = new CreditsController();
