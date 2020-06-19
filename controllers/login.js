const bcrypt = require("bcryptjs");
const User = require("../models/user");
const service = require("../service/index");

function login(req, res) {
    const user = 'houdini'
  return res.status(200).json({
    user: user,
    token: service.createToken(user),
  });
}

module.exports = login;
