var tagService = require('../servives/tagService');

module.exports = {
  createTag: function (req, res) {
    var tagData = req.body;
    if(privateProperty.validateTagData(tagData)) {
      return  tagService.createTag(tagData, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      });
    }
    return res.json('Invalid data', 400);
  },

  updateTag: function (req, res) {
    var tagData = req.body;
    var noteId = req.params.id;
    return  tagService.updateTag(noteId, tagData, function (err, result) {
      return err ? res.status(400).json({result: result}) : res.json({result: result});
    });
  },

  deleteTag: function (req, res) {
    var noteId = req.params.id;
    if(noteId) {
      return  tagService.deleteTag(noteId, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      })
    }
    return res.status(400).json({result: 'Invalid data'});
  },

  fetchAllTags: function (req, res) {
    return  tagService.getTag(null, function (err, result) {
      return err ? res.status(400).json({result: result}) : res.json({result: result});
    });
  },

  fetchOneTag: function (req, res) {
    var noteId = req.params.id;
    if(noteId) {
      return  tagService.getTag(noteId, function (err, result) {
        return err ? res.status(400).json({result: result}) : res.json({result: result});
      });
    }
    return res.status(400).json({result: 'Invalid data'});
  }
};

var privateProperty = {
  validateTagData: function (data) {
    if(data.tagName) {
      return data.tagName.length;
    }
    return false;
  }
};