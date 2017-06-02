var express = require('express');
var router = express.Router();
var noteController = require('../controllers/noteController');

/* Note Verbs listing. */
router.get('/notes', noteController.fetchAllNotes);

router.get('/notes/:id', noteController.fetchOneNote);

router.post('/notes', noteController.createNote);

router.put('/notes/:id', noteController.updateNote);

router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;
