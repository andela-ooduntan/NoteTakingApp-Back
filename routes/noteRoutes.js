var express = require('express');
var router = express.Router();
var booksController = require('../controllers/noteController');

/* GET users listing. */
router.get('/books', booksController.fetchBooks);

router.get('/books/:id', booksController.fetchOneBooks);

router.post('/books', booksController.createBooks);

router.put('/books/:id', booksController.updateBooks);

router.delete('/books/:id', booksController.deleteBooks);

module.exports = router;
