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
   noteModel.find(query, cb);
  },
  deleteNote: function (id, cb) {
    noteModel.deleteOne({id: id}, cb);
  },
  updateNote: function (id, noteData, cb) {
    noteModel.update({id: id}, noteData, cb);
  }
}