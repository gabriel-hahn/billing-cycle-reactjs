const routes = require('express');
const authMiddleware = require('./middleware/auth');

const SessionController = require('./controllers/SessionController');
const DebtsController = require('./controllers/DebtsController');
const CreditsController = require('./controllers/CreditsController');

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

router.get('/debts', DebtsController.index);
router.get('/debt/:id', DebtsController.show);
router.post('/debt', DebtsController.store);
router.put('/debt', DebtsController.update);
router.delete('/debt/:id', DebtsController.destroy);

router.get('/credits', CreditsController.index);
router.get('/credit/:id', CreditsController.show);
router.post('/credit', CreditsController.store);
router.put('/credit', CreditsController.update);
router.delete('/credit/:id', CreditsController.destroy);

module.exports = router;
