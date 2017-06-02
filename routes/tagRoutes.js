var express = require('express');
var router = express.Router();
var noteController = require('../controllers/tagController');

/* Note Verbs listing. */
router.get('/tag', noteController.fetchAllTags);

router.get('/tag/:id', noteController.fetchOneTag);

router.post('/tag', noteController.createTag);

router.put('/tag/:id', noteController.updateTag);

router.delete('/tag/:id', noteController.deleteTag);

module.exports = router;
