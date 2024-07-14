const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.body.token ||
      req.cookies.token ||
      req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token does not found",
      });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decode", decode);
      req.id = decode.id;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong in token authentication",
    });
  }
};

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('JWT verification failed:', error);
        return res.status(400).json({ msg: 'Invalid token' });
    }
};

