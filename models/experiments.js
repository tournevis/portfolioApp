var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('experiments', new Schema({
  title: String,
  content: String,
  projectId: Number,
  color : String,
  url: String,
  imgPath: String
}));
