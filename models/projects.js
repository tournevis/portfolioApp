var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('projects', new Schema({
  title: String,
  content: String,
  url: String,
  imgPath: String
}));
