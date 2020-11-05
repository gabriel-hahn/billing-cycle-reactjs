const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

    if (req.headers.userid && req.headers.userid != decoded.id) {
      return res.status(401).json({ message: 'Request not allowed' });
    }

    req.userId = decoded.id;
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid' });
  }

  return next();
};
