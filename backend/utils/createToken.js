import jwt from 'jsonwebtoken';

const generateToken = (res, UserId) => {
  const token = jwt.sign({ UserId }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: '30d',
  });

  // Set JWT as an HTTT-Only cookie

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
  return token;
};

export default generateToken;
