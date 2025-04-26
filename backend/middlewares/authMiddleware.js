import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  //Read JWT from the jwt cookie
  token = req.cookies.jwt;
  //Check if the token is present
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// check if the user is an admin
const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send('Not authorized as an admin.');
  }
};

export { authenticate, authorizeAdmin };
