var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('projects', new Schema({
  title: String,
  content: String,
  projectId: Number,
  color : String,
  url: String,
  imgPath: [],
  videoUrl: String,
  class: String,
  links : []
}));
