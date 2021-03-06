const { User } = require('../models');

//User controller
const userController = {
    //GET all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({_id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //GET a single user by _id
    getUserById({ params }, res) {
        User.findOne({_id: params.userId })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(400).json({message: "No User found with this id!"});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //POST a new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    //PUT to update a user by _id
    updateUser({ params, body }, res) {
        User.findByIdAndUpdate({_id: params.userId }, body, ({ new: true, runValidators: true }))
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(400).json({message: "No User found with this id!"})
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //DELETE to remove as user by _id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.userId })
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(400).json({message: "No User found with this id!"})
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //POST a new friend to the user's friend list by friend _id (use $push)
    addFriend({ params }, res) {
        //will eventually need to validate the existence of the friend's User profile here (use .findById)
        //User.findById()
        User.findOneAndUpdate(
            { _id: params.userId},
            { $push: { friends: params.friendId }},
            { new: true}
        )
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(400).json({message: "No user found with this id!"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    //DELETE a friend from the user's friend list by friend _id (use $pull)
    deleteFriend({ params }, res) {
        //will eventually need to validate the existence of the friend's User profile here (use .findById)
        //User.findById()
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId }},
            { new: true }
        )
        .then(dbUserData => {
            if(!dbUserData){
                res.status(400).json({message: "No user found with this id!"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    } 
};

module.exports = userController;