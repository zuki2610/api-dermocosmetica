const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.requireAuth = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  console.log('secret', process.env.JWT_SECRET);
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(401).json({ error: 'Invalid token' });
      } else {
        req.user = decodedToken.user;
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Token not provided' });
  }
};