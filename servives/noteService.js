var noteModel = require('../Model/noteModel');

module.exports = {
  createNote: function (noteData, cb) {
    var newNote = new noteModel(noteData);
    newNote.save(function (err) {
      return err ? cb(true, err) : cb(false, err);
    });
  },
  getNote: function (noteId, cb) {
    var query = noteId ? {_id: noteId} : {};
   noteModel.find(query)
     .populate('tagId')
     .exec(cb);
  },
  deleteNote: function (id, cb) {
    noteModel.deleteOne({id: id}, cb);
  },
  updateNote: function (id, noteData, cb) {
    noteModel.update({id: id}, noteData, cb);
  },
  findNote: function (keyword, cb) {
    console.log(keyword, 'this is the key word');
    var key = new RegExp(keyword, 'i');
    var searchQuery ={ $or:[ {'title': key}, {'content': key}] };

    noteModel.find(searchQuery)
      .populate( 'tagId')
      .exec(function (err, result) {
        console.log(err, result, 'this is the result');
        cb(err, result);
      });
  }
}