const DebitsService = require('../../services/DebitsService');
const { handleProcessError } = require('../../../utils/error');

class DebitsController {
  async index(req, res) {
    const { startDate, endDate } = req.query;
    const { userid } = req.headers;

    const debits = await DebitsService.index(startDate, endDate, userid);

    return res.json(debits);
  }

  async store(req, res) {
    const debit = await DebitsService.store(req.body);

    return debit.error ? handleProcessError(res, debit) : res.json(debit);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const debit = await DebitsService.destroy(id);

    return debit.error ? handleProcessError(res, debit) : res.json(debit);
  }

  async show(req, res) {
    const { id } = req.params;

    const debit = await DebitsService.show(id);

    return debit.error ? handleProcessError(res, debit) : res.json(debit);
  }

  async update(req, res) {
    const debit = await DebitsService.update(req.body);

    return debit.error ? handleProcessError(res, debit) : res.json(debit);
  }

  async getAllByCurrentMonth(req, res) {
    const { userid } = req.headers;
    const debits = await DebitsService.getAllByCurrentMonth(userid);

    return debits.error ? handleProcessError(res, debits) : res.json(debits);
  }
}

module.exports = new DebitsController();
