const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Route for /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// Route for /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).post(updateThought).delete(deleteThought);

// Route for /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(createReaction).delete(deleteReaction);

// Route for /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;