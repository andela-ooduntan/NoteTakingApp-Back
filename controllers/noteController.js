var booksService = require('../servives/noteService')
module.exports = {
  createBooks: function (req, res) {
    var bookData = req.body;
    if(this.validateBook) {
      return  booksService.createBook(bookData, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      })
    }
   return res.json('Invalid data', 400);
  },

  updateBooks: function (req, res) {
    var bookData = req.body;
    var bookId = req.params.id;
    if(this.validateBook) {
      return  booksService.updateBooks(bookId, bookData, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      })
    }
    return res.status(400).json({result: 'Invalid data'});
  },

  deleteBooks: function (req, res) {
    var bookData = req.body;
    var bookId = req.params.id;
    if(this.validateBook) {
      return  booksService.deleteBooks(bookId, bookData, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      })
    }
    return res.status(400).json({result: 'Invalid data'});
  },

  fetchBooks: function (req, res) {
    if(this.validateBook) {
      return  booksService.getBooks(null, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      })
    }
    return res.status(400).json({result: 'Invalid data'});
  },

  fetchOneBooks: function (req, res) {
    var bookId = req.params.id;
    if(this.validateBook) {
      return  booksService.getBooks(bookId, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      })
    }
    return res.status(400).json({result: 'Invalid data'});
  }
};