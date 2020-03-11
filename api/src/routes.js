const routes = require('express');
const authMiddleware = require('./app/middleware/auth');
// eslint-disable-next-line import/no-named-as-default
const SessionController = require('./app/controllers/SessionController');

const router = routes.Router();

router.post('/sessions', SessionController.store);

router.use(authMiddleware);

router.get('/dashboard', (req, res) => {
  res.status(200).send({ message: 'Success !' });
});

module.exports = router;
