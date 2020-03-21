const routes = require('express');
const authMiddleware = require('./middleware/auth');

const SessionController = require('./controllers/SessionController');
const DebitsController = require('./controllers/DebitsController');
const CreditsController = require('./controllers/CreditsController');

const router = routes.Router();

router.get('/healthycheck', (req, res) => {
  res.status(200).send({ message: 'Server ON' });
});

router.post('/user', SessionController.create);
router.post('/sessions', SessionController.store);

router.use(authMiddleware);

// Implement credits and debits by startDate and endDate to retrieve information / By ID
router.get('/overview', (req, res) => {
  res.status(200).send({ message: 'Success !' });
});

router.get('/debits', DebitsController.index);
router.get('/debit/:id', DebitsController.show);
router.post('/debit', DebitsController.store);
router.put('/debit', DebitsController.update);
router.delete('/debit/:id', DebitsController.destroy);

router.get('/credits', CreditsController.index);
router.get('/credit/:id', CreditsController.show);
router.post('/credit', CreditsController.store);
router.put('/credit', CreditsController.update);
router.delete('/credit/:id', CreditsController.destroy);

module.exports = router;
