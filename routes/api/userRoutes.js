const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// Route for /api/users
router.route('/').get(getUsers).post(createUser);

// Route for /api/users/:userId
router.route('/:userId').get(getSingleUser).post(updateUser).delete(deleteUser);

// Route for /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;