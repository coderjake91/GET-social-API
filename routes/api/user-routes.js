const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//set put GET one, PUT, and DELETE at /api/users/:userId
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
//set up POST and DELETE at /api/users/:userId/friends/:friendId for friend addition and deletion from user
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;