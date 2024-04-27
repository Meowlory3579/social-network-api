const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
// GET all users | POST new user
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId
// GET single user by id | PUT update single user by id | DELETE single user by id
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// POST new friend by id to single user by id | DELETE friend by id from single user by id
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;