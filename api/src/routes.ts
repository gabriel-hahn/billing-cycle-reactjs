import routes from 'express'
// import authMiddleware from './app/middleware/auth'
// import SessionController from './app/controllers/SessionController'

const router = routes.Router()

// router.post('/sessions', SessionController.store)

// router.use(authMiddleware)

router.get('/dashboard', (req, res) => {
  res.status(200).send({ message: 'Success !' })
})

module.exports = router
