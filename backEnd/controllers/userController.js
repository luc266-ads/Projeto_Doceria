const userModel = require('../models/userModel');

function getUsers(req, res) {
  const users = userModel.getAllUsers();
  res.json(users);
}

function createUser(req, res) {
  const newUser = req.body;
  const user = userModel.addUser(newUser);
  res.status(201).json(user);
}

module.exports = {
  getUsers,
  createUser
};