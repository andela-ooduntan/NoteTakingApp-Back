var bookModel = require('../Model/bookModel');

module.exports = {
  createBook: function (bookData, cb) {
    var book = new bookModel(userdata);
    book.save(function (err) {
      return err ? cb(false, err) : cb(true, err);
    });
  },
  getBooks: function (bookId, cb) {
    var query = bookData ? {_id: bookId} : {};
   bookModel.find(query, cb);
  },
  deleteBooks: function (id, bookData, cb) {
    bookModel.deleteOne({id: id}, bookData, cb);
  },
  updateBooks: function (id, bookData, cb) {
    user.update({id: id}, bookData, cb);
  }
}