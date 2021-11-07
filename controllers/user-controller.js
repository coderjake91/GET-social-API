const { model } = require('mongoose');
const { User } = require('../models');

//User controller
const userController = {
    //GET all users
    getAllUsers() {

    },
    //GET a single user by _id
    getUserById() {

    },
    //POST a new user
    createUser() {

    },
    //PUT to update a user by _id
    updateUser() {

    },
    //DELETE to remove as user by _id
    deleteUser() {

    },
    //POST a new friend to the user's friend list by friend _id
    addFriendById() {

    },
    //DELETE a friend from the user's friend list by friend _id
    deleteFriendById() {
        
    }
};

model.exports = userController;