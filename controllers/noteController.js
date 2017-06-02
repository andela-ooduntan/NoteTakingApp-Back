var noteService = require('../servives/noteService')
module.exports = {
  createNote: function (req, res) {
    var noteData = req.body;
    // if(privateProperty.validateNoteData(noteData)) {
    //   return  noteService.createNote(noteData, function (err, result) {
    //     return err ? res.status(400).json({result: result}) : res.json({result: result});
    //   })
    // }
   return res.json('Invalid data', 400);
  },

  updateNote: function (req, res) {
    var noteData = req.body;
    var noteId = req.params.id;
      return  noteService.updateNote(noteId, noteData, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      });
  },

  deleteNote: function (req, res) {
    var noteId = req.params.id;
    if(noteId) {
      return  noteService.deleteNote(noteId, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      })
    }
    return res.status(400).json({result: 'Invalid data'});
  },

  fetchAllNotes: function (req, res) {
      return  noteService.getNote(null, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
    });

  },

  fetchOneNote: function (req, res) {
    var noteId = req.params.id;
    if(noteId) {
      return  noteService.getNote(noteId, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      })
    }
    return res.status(400).json({result: 'Invalid data'});
  }
};

var privateProperty = {
  validateNoteData: function (data) {
    if(data.title && data.content) {
      return data.title.length && data.content.length;
    }
    return false;
  }
}