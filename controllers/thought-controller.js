const { User, Thought } = require('../models');

//Thought controller
const thoughtController = {
    //GET all thoughts
    getAllThoughts() {

    },
    //GET a single though by _id
    getThoughtById() {

    },
    //POST a new thought (also push the created thoughts to the associated user)
    createThought() {

    },
    //PUT to update a thought by _id
    updateThought() {

    },
    //DELETE to remove a though by _id
    deleteThought() {

    },
    //POST to create a reaction (stored in a thought's reaction array field)
    createReaction() {

    },
    //DELETE to pull and remove a reaction by the reactions reactionId value
    deleteReaction() {

    }
};

module.exports = thoughtController;