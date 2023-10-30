const jwt = require("jsonwebtoken");

const generateJwtToken = (payload) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  return jwt.sign(payload, secretKey, { expiresIn: "7d" });
};

module.exports = { generateJwtToken };
