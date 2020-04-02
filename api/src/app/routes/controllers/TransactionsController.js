const TransactionsService = require('../../services/TransactionsService');

class TransactionsController {
  async cashFlow(req, res) {
    const { userid } = req.headers;

    const cashFlow = await TransactionsService.cashFlow(userid);

    return res.json(cashFlow);
  }

  async completeCashFlow(req, res) {
    const { userid } = req.headers;

    const cashFlow = await TransactionsService.completeCashFlow(userid);

    return res.json(cashFlow);
  }
}

module.exports = new TransactionsController();
