var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Project', new Schema({
  title: String,
  content: String,
  imgPath: String
}));
