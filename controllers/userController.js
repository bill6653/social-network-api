const { User } = require("../models");

module.exports = {
  // GET all users
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // CREATE new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // GET single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // UPDATE a user
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found" })
          : res.json({ message: "User has been deleted" })
      )
      .catch((err) => res.status(500).json(err));
  },
  // ADD a friend to user
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE a friend from user
  deleteFriend(req, res) {
    User.findOneAndDelete(req.params.userId)
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
