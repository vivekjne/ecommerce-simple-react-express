import jwt from "jsonwebtoken";
import { JwtSecret } from "babel-dotenv";
import db from "../models";
const User = db.User;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      message: "No token provided",
      status: false
    });
  }

  jwt.verify(token, JwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Unauthorized token!",
        status: false
      });
    }

    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPK(req.userId);
    if (user && user.isAdmin) {
      next();
      return;
    }

    return res.status(403).json({
      message: "Required Admin Role!"
    });
  } catch (err) {
    return res.status(400).json({ message: err.message, status: false });
  }
};

export { verifyToken, isAdmin };
