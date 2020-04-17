const CreditsService = require('../../services/CreditsService');
const { handleProcessError } = require('../../../utils/error');

class CreditsController {
  async index(req, res) {
    const { startDate, endDate } = req.query;
    const { userid } = req.headers;

    const credits = await CreditsService.index(startDate, endDate, userid);

    return res.json(credits);
  }

  async store(req, res) {
    const credit = await CreditsService.store(req.body);

    return credit.error ? handleProcessError(res, credit) : res.json(credit);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const credit = await CreditsService.destroy(id);

    return credit.error ? handleProcessError(res, credit) : res.json(credit);
  }

  async show(req, res) {
    const { id } = req.params;

    const credit = await CreditsService.show(id);

    return credit.error ? handleProcessError(res, credit) : res.json(credit);
  }

  async update(req, res) {
    const credit = await CreditsService.update(req.body);

    return credit.error ? handleProcessError(res, credit) : res.json(credit);
  }

  async getAllByCurrentMonth(req, res) {
    const { userid } = req.headers;
    const credits = await CreditsService.getAllByCurrentMonth(userid);

    return credits.error ? handleProcessError(res, credits) : res.json(credits);
  }
}

module.exports = new CreditsController();
