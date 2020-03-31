const routes = require('express');
const authMiddleware = require('./middleware/auth');

const SessionController = require('./controllers/SessionController');
const DebitsController = require('./controllers/DebitsController');
const CreditsController = require('./controllers/CreditsController');
const TransactionsController = require('./controllers/TransactionsController');

const router = routes.Router();

router.get('/healthycheck', (req, res) => {
  res.status(200).send({ message: 'Server ON' });
});

router.post('/user', SessionController.create);
router.post('/sessions', SessionController.store);

router.use(authMiddleware);

router.get('/overview', (req, res) => {
  res.status(200).send({ message: 'Success !' });
});

router.get('/debits', DebitsController.index);
router.post('/debit', DebitsController.store);
router.put('/debit', DebitsController.update);
router.get('/debits/allByCurrentMonth', DebitsController.getAllByCurrentMonth);
router.get('/debit/:id', DebitsController.show);
router.delete('/debit/:id', DebitsController.destroy);

router.get('/credits', CreditsController.index);
router.post('/credit', CreditsController.store);
router.put('/credit', CreditsController.update);
router.get('/credits/allByCurrentMonth', CreditsController.getAllByCurrentMonth);
router.get('/credit/:id', CreditsController.show);
router.delete('/credit/:id', CreditsController.destroy);

router.get('/transactions/cashFlow', TransactionsController.cashFlow);

module.exports = router;
