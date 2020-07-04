"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _models.default.User;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      message: "No token provided",
      status: false
    });
  }

  _jsonwebtoken.default.verify(token, "kooterprime123", (err, decoded) => {
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

exports.verifyToken = verifyToken;

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
    return res.status(400).json({
      message: err.message,
      status: false
    });
  }
};

exports.isAdmin = isAdmin;