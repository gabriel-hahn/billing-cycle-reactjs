const routes = require('express');
const authMiddleware = require('./middleware/auth');

const SessionController = require('./controllers/SessionController');

const router = routes.Router();

router.get('/healthycheck', (req, res) => {
  res.status(200).send({ message: 'Server ON' });
});

router.post('/user', SessionController.create);
router.post('/sessions', SessionController.store);

router.use(authMiddleware);

router.get('/dashboard', (req, res) => {
  res.status(200).send({ message: 'Success !' });
});

module.exports = router;
