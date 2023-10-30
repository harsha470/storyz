const express = require("express");
const { jwtDecode } = require("jwt-decode");
const { generateJwtToken } = require("../../src/utils/helper");
const User = require("../models/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const authToken = req.headers.authorization;
    const provider = req.headers["x-provider"]?.toUpperCase();

    const decoded = jwtDecode(authToken);

    /** @type {User} */
    let user = undefined;

    switch (provider) {
      case "GOOGLE":
        user = await User.create({
          name: decoded.name,
          email: decoded.email,
          imageUrl: decoded.picture,
          provider,
          providerId: decoded.sub,
        });
        break;
      default:
        throw new Error("Invalid Provider");
    }

    const token = generateJwtToken(user._doc);

    res.send({ user, token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
