const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

//set up GET all and POST at /api/thougths
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
//set up PUT and DELETE at /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
//set up PUT for reactions /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions').put(createReaction);
//set up PUT for reactions /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId').put(deleteReaction);

module.exports = router;