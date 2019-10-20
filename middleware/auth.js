const jwt = require('jsonwebtoken');
const config = require('config');

const secret = process.env.NODE_ENV === 'production'
  ? process.env.JWT_SECRET
  : config.get('jwtSecret');

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res
      .status(401)
      .json({ message: 'No token found, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
