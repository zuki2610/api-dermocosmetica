const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.requireAuth = (req, res, next) => {
  
  //Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2Y4MDY4NDY4MzQ0Yzg0ZjM1YWFmOWIiLCJpYXQiOjE2NzcxOTkxMTcsImV4cCI6MTY3NzIwMTcwOX0.pSmseeLmyS8uz2eiI0IP-Yk8PPUFvZqgZAip0gknonk"
  // operadorTernario = condicion ? verdadero : falso
  const token =  req.headers.Authorization !== null && req.headers.Authorization !== undefined ? req.header('Authorization').split(' ')[1] : null;
  console.log('secret', process.env.JWT_SECRET);
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
      if (error) {
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