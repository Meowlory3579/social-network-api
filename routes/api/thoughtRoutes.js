const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
// GET all thoughts | POST new thought
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
// GET single thought by id | PUT update single thought by id | DELETE single thought by id
router.route("/:thoughtId").get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// POST new reaction to single thought by id
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// DELETE reaction by id from single thought by id
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;