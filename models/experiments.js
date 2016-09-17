var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('experiments', new Schema({
  title: String,
  id: Number,
  content: String,
  projectId: Number,
  color : String,
  url: String,
  imgPath: [],
  videoUrl: String,
  class: String,
  links : [],
  jsPath: String,
  cssPath: String
}));
