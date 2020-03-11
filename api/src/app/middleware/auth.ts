import jwt from 'jsonwebtoken'
import { promisify } from 'util'

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET)
    req.userId = decoded.id
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid' })
  }

  return next()
}
