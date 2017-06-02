var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookCollection = mongoose.Schema({
  tagId: [{
    type: Schema.Types.ObjectId,
    ref: 'tags'
  }],
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('notes', bookCollection);