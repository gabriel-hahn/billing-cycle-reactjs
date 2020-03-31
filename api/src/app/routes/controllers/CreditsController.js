const CreditsService = require('../../services/CreditsService');

class CreditsController {
  async index(req, res) {
    const { startDate, endDate } = req.query;
    const { userid } = req.headers;

    const credits = await CreditsService.index(startDate, endDate, userid);

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

  async getAllByCurrentMonth(req, res) {
    const { userid } = req.headers;
    const credits = await CreditsService.getAllByCurrentMonth(userid);

    if (credits.error) {
      const { status, message } = credits.error;

      return res.status(status).json({ message });
    }

    return res.json(credits);
  }

  async getAllRepeat(req, res) {
    const { userid } = req.headers;
    const credits = await CreditsService.getAllRepeat(userid);

    if (credits.error) {
      const { status, message } = credits.error;

      return res.status(status).json({ message });
    }

    return res.json(credits);
  }
}

module.exports = new CreditsController();
