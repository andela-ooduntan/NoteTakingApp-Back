var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookCollection = mongoose.Schema({
  tagName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('tags', bookCollection);