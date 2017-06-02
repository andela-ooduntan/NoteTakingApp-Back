/**
 * Created by heavywater on 02/06/2017.
 */

var tagModel = require('../Model/tagsModel');

module.exports = {
  createTag: function (tagData, cb) {
    var newTag = new tagModel(tagData);
    newTag.save(function (err) {
      return err ? cb(true, err) : cb(false, err);
    });
  },
  getTag: function (tagId, cb) {
    var query = tagId ? {_id: tagId} : {};
    tagModel.find(query, cb);
  },
  deleteTag: function (id, cb) {
    tagModel.deleteOne({id: id}, cb);
  },
  updateTag: function (id, tagData, cb) {
    tagModel.update({id: id}, tagData, cb);
  }
};
